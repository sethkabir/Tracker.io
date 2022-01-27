import Navbar from './Navbar';

const EmergencyContact = () => {
    return (
    <div className="flex flex-col h-screen">
        <Navbar />
        <div className="card card-bordered">
        <div class="card-body">
            <h2 class="card-title">Top image
                <div class="badge mx-2 badge-secondary">NEW</div>
            </h2> 
            <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p> 
            <div class="justify-end card-actions">
                <button class="btn btn-secondary">More info</button>
            </div>
        </div>
        </div>
    </div>
    )
}


export default EmergencyContact;