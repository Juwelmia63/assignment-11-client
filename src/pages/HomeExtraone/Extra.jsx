
const Extra = () => {
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto">
                <h2 className="text-3xl font-semibold text-center mb-12">Meet Our Chefs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="chef-card bg-white rounded-lg shadow-lg overflow-hidden">
                        <img src="https://i.ibb.co/vXJtm88/cook-chef-find-cook-bestcook-2a70a5f3689ea2c1fe06.jpg" alt="Chef 1" className="w-full h-64 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">Chef John Doe</h3>
                            <p className="text-gray-600">Chef John Doe is known for his innovative dishes and passion for cooking. He has worked in several renowned restaurants around the world, bringing unique flavors to every dish.</p>
                        </div>
                    </div>
                    <div className="chef-card bg-white rounded-lg shadow-lg overflow-hidden">
                        <img src="https://i.ibb.co/TYRhx31/cooking-culinary-people-concept-happy-600nw-1929875840.webp" alt="Chef 2" className="w-full h-64 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">Chef Jane Smith</h3>
                            <p className="text-gray-600">Chef Jane Smith is a master at creating mouthwatering dishes with a modern twist. With her culinary expertise and attention to detail, she ensures every dish is a delightful experience.</p>
                        </div>
                    </div>
                    <div className="chef-card bg-white rounded-lg shadow-lg overflow-hidden">
                        <img src="https://i.ibb.co/tKm0XyC/portrait-smiling-chef-uniform-329181-675.jpg" alt="Chef 3" className="w-full h-64 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">Chef Michael Johnson</h3>
                            <p className="text-gray-600">Chef Michael Johnson brings a wealth of experience and creativity to our kitchen. His passion for culinary arts shines through in every dish he prepares, delivering an unforgettable dining experience.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Extra;