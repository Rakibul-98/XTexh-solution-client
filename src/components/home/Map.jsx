export default function Map() {
  const contactInfo = [
    {
      label: "Address",
      value: "House 0, Road 10, Gulshan-1, Dhaka, Bangladesh",
      icon: "📍",
    },
    { label: "Phone", value: "+880 1234 567890", icon: "📞" },
    { label: "Email", value: "info@xtechsolution.com", icon: "✉️" },
    { label: "Website", value: "www.xtechsolution.com", icon: "🌐" },
    { label: "Support", value: "support@xtechsolution.com", icon: "🛠️" },
  ];

  return (
    <section id="location" className="py-12">
      <div className="px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Our Location
        </h2>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3 bg-gradient-to-br from-gray-100 to-gray-200 p-6 shadow-md flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4 border-b pb-2 border-gray-300">
              XTech Solution Headquarters
            </h3>

            <div className="space-y-3 text-gray-700">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="font-semibold whitespace-nowrap">
                    {item.icon} {item.label}:
                  </span>
                  <p>{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-2/3 h-64 md:h-90 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.1192438174958!2d90.41092397808396!3d23.778767732662736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7e0f33a33f7%3A0xa4c5c732b2960102!2sGulshan%201%20DNCC%20Market!5e0!3m2!1sen!2sbd!4v1750830904521!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="XTech Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
