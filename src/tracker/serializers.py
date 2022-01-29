from dataclasses import fields
from django.contrib.auth import get_user_model
from django.core.exceptions import ValidationError
from django.contrib.auth.password_validation import validate_password as pasval
from rest_framework import serializers

from .models import EmergencyContact, Profile

User = get_user_model()

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['contact', 'address', 'picture']

    def update(self, instance, validated_data):
        instance.contact = validated_data.get('contact', instance.contact)
        instance.address = validated_data.get('address', instance.address)
        instance.picture = validated_data.get('picture', instance.picture)
        instance.save()

        return instance

class UserSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer(required=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email', 'profile', 'last_login', 'date_joined']

    def update(self, instance, validated_data):
        profile_data = validated_data.pop('profile')
        profile = Profile.objects.get(user=instance)

        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
        instance.email = validated_data.get('email', instance.email)
        instance.save()

        profile.contact = profile_data.get('contact', profile.contact)
        profile.address = profile_data.get('address', profile.address)
        profile.picture = profile_data.get('picture', profile.picture)
        profile.save()

        return instance

class SignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password', 'first_name', 'last_name', 'email']
    
    def validate_password(self, value):
        try:
            pasval(value)
        except ValidationError as exc:
            raise serializers.ValidationError(str(exc))
        return value

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name']
        )
        user.set_password(validated_data['password'])
        user.save()

        profile = Profile.objects.create(user=user)
        profile.save()
        return user

class DiscordLoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name', 'email']
    
    def create(self, validated_data):
        user, created = User.objects.get_or_create(
            username=validated_data['username'],
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name']
        )
        if created:
            user.set_unusable_password()
            user.save()
            profile = Profile.objects.create(user=user)
            profile.save()
        return user

class ChangePasswordSerializer(serializers.Serializer):
    current_password = serializers.CharField(max_length=128, write_only=True, required=True)
    new_password1 = serializers.CharField(max_length=128, write_only=True, required=True)
    new_password2 = serializers.CharField(max_length=128, write_only=True, required=True)

    def validate_current_password(self, value):
        user = self.context['request'].user
        if not user.check_password(value):
            raise serializers.ValidationError({"current_password": "Password is not correct"})
        return value

    def validate(self, validated_data):
        if validated_data['new_password1'] != validated_data['new_password2']:
            raise serializers.ValidationError({'new_password': "The two password fields don't match."})
        pasval(validated_data['new_password1'], self.context['request'].user)
        return validated_data

    def save(self, **kwargs):
        password = self.validated_data['new_password1']
        user = self.context['request'].user
        user.set_password(password)
        user.save()
        return user

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmergencyContact
        fields = ['id', 'user', 'first_name', 'last_name', 'contact', 'email', 'address']
    
    def create(self, validated_data):
        contact = EmergencyContact.objects.create(
            user = validated_data['user'],
            first_name = validated_data["first_name"],
            last_name = validated_data["last_name"],
            contact = validated_data["contact"],
            email = validated_data["email"],
            address = validated_data["address"],
        )

        contact.save()
        return contact

class ProfilePicSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(required=False)

    class Meta:
        model = User
        fields = ['image']

    def update(self, instance, validated_data):
        profile = Profile.objects.get(user=instance)
        profile.picture = validated_data.get('image', None)
        profile.save()
        

        return instance