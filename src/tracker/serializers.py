from django.contrib.auth import get_user_model
from django.core.exceptions import ValidationError
from django.contrib.auth.password_validation import validate_password as pasval

from rest_framework import serializers

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

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

        return user

# {
#     "current_password": "1qa2ws3ed4rf",
#     "new_password1": "1234rewqasdf",
#     "new_password2": "1234rewqasdf"
# }

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