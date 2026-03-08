import React from "react";

export default function Portfolio1() {
  return (
    <div className="min-h-screen bg-orange-50">
      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-2xl text-black font-bold">Istad</h1>
          <div className="flex gap-8">
            <a href="#home" className="text-orange-500 font-medium">
              Home
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-orange-500 transition"
            >
              Services
            </a>
            <a
              href="#works"
              className="text-gray-700 hover:text-orange-500 transition"
            >
              Works
            </a>
            <a
              href="#blog"
              className="text-gray-700 hover:text-orange-500 transition"
            >
              Blog
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-orange-500 transition"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section id="home" className="max-w-7xl mx-auto px-6 py-20">
        <div className="lg:justify-between  lg:flex gap-12 items-center">
          <div>
            <p className="text-orange-500 font-medium mb-4">Hi, I'm</p>
            <h2 className="text-6xl text-black font-bold mb-4">Sela Chhari</h2>
            <p className="text-xl text-black mb-6">Digital Marketing Expert</p>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Shed what able cold new the she hold. Friendly as an betrayed
              formerly he. <br /> Morning because as to society behaved moments.
            </p>
            <button className="bg-orange-500 text-white px-8 py-3 rounded-md hover:bg-orange-600 transition">
              View My Work
            </button>
          </div>
          <div className="flex justify-center">
            <div className="w-100 h-100 rounded-full overflow-hidden bg-gray-200">
              <img
                src="https://scontent.fpnh1-2.fna.fbcdn.net/v/t39.30808-6/632915505_923490336882367_3071047822858961796_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFZ4_Q3ZPzMbaVeMStu91fXbxYsDHEA31xvFiwMcQDfXOtK7w_12XD1Q2GtZciO7vHdPE_n2noC07hvb3dliWN2&_nc_ohc=eCRBNj3fzEwQ7kNvwGGNuSq&_nc_oc=AdkP_irVfL4u4JGe05gSkIt32SMF7aA1CzyEDZ0gR27__T0lGEGCSSv9ah3mRR28lEw&_nc_zt=23&_nc_ht=scontent.fpnh1-2.fna&_nc_gid=B0CNJ9eWVmSj722KkVVDrA&oh=00_Afst509PhtjUzzoLp_0AnGj6L_VRrWvGdvjOH1msT5XazQ&oe=69A59F3E"
                alt="Profile"
                className="w-full h-50% object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="container  flex gap-8 mx-auto px-6">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 bg-orange-100 h-12 rounded-lg flex items-center justify-center">
                <i className="fa-solid fa-briefcase text-xl text-orange-500"></i>
              </div>
              <div>
                <p className="font-bold text-black text-xl">8 years job</p>
                <p className="text-gray-500 text-sm">Experience</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 bg-orange-100 h-12 rounded-lg flex items-center justify-center">
                <i className="fa-solid fa-check text-xl text-orange-500"></i>
              </div>
              <div>
                <p className="font-bold text-black text-xl">500+ Projects</p>
                <p className="text-gray-500 text-sm">Completed</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 bg-orange-100 h-12 rounded-lg flex items-center justify-center">
                <i className="fa-solid fa-headset text-xl text-orange-500"></i>
              </div>
              <div>
                <p className="font-bold text-black text-xl">Online 24/7</p>
                <p className="text-gray-500 text-sm">Support</p>
              </div>
            </div>
          </div>{" "}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 bg-orange-100 h-12 rounded-lg flex items-center justify-center">
                <i className="fa-solid fa-headset text-xl text-orange-500"></i>
              </div>
              <div>
                <p className="font-bold text-black text-xl">Online 24/7</p>
                <p className="text-gray-500 text-sm">Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-orange-500 font-medium  mb-2">SERVICES</p>
        <h3 className="text-4xl text-black font-bold  mb-16">
          I Provide Wide Range
          <br />
          Of Digital Services
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg p-8 text-center hover:shadow-lg transition">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fa-solid fa-palette text-purple-500"></i>
            </div>
            <h4 className="font-bold text-black text-lg mb-3">UI/UX Design</h4>
            <p className="text-gray-500 text-sm">
              Error be tul design ofbe ful dwhatever age your adicional men
              Mapwell speicis
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 text-center hover:shadow-lg transition">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fa-solid text-orange-500 fa-desktop"></i>
            </div>
            <h4 className="font-bold text-black text-lg mb-3">Web Design</h4>
            <p className="text-gray-500 text-sm">
              Error be tul design ofbe ful dwhatever age your adicional men
              Mapwell speicis
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 text-center hover:shadow-lg transition">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fa-solid text-red-500 fa-bullhorn"></i>
            </div>
            <h4 className="font-bold text-black text-lg mb-3">
              Digital Marketing
            </h4>
            <p className="text-gray-500 text-sm">
              Error be tul design ofbe ful dwhatever age your adicional men
              Mapwell speicis
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 text-center hover:shadow-lg transition">
            <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fa-solid text-cyan-500 fa-mobile-screen-button"></i>
            </div>
            <h4 className="font-bold text-black text-lg mb-3">App Develop</h4>
            <p className="text-gray-500 text-sm">
              Error be tul design ofbe ful dwhatever age your adicional men
              Mapwell speicis
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <p className="text-orange-500 font-medium text-center mb-2">
          WHY CHOOSE ME
        </p>
        <h3 className="text-4xl font-bold text-black text-center mb-16">
          My Experience Area
        </h3>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          <div>
            <div className="flex justify-between mb-2">
              <span className="font-medium text-black">Facebook Marketing</span>
              <span className="font-medium text-black">85%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-orange-500 rounded-full"
                style={{ width: "85%" }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="font-medium text-black">
                Affiliate Marketing
              </span>
              <span className="font-medium text-black">90%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-orange-500 rounded-full"
                style={{ width: "90%" }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="font-medium text-black">
                Search Engine Optimization
              </span>
              <span className="font-medium text-black">90%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-orange-500 rounded-full"
                style={{ width: "90%" }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="font-medium text-black">Graphic Design</span>
              <span className="font-medium text-black">85%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-orange-500 rounded-full"
                style={{ width: "85%" }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="font-medium text-black">Content Writing</span>
              <span className="font-medium text-black">95%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-orange-500 rounded-full"
                style={{ width: "95%" }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="font-medium text-black">Web UI Design</span>
              <span className="font-medium text-black">45%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-orange-500 rounded-full"
                style={{ width: "45%" }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="font-medium text-black">Youtube Marketing</span>
              <span className="font-medium text-black">72%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-orange-500 rounded-full"
                style={{ width: "72%" }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="font-medium text-black">Web Design</span>
              <span className="font-medium text-black">70%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-orange-500 rounded-full"
                style={{ width: "70%" }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      <section id="works" className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-orange-500 font-medium text-center mb-2">
          PORTFOLIO
        </p>
        <h3 className="text-4xl font-bold text-black text-center mb-8">
          My Amazing Works
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer">
            <img
              src="https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Project 1"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer">
            <img
              src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Project 2"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer">
            <img
              src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Project 3"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer">
            <img
              src="https://images.pexels.com/photos/1166643/pexels-photo-1166643.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Project 4"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer">
            <img
              src="https://images.pexels.com/photos/1367192/pexels-photo-1367192.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Project 5"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer">
            <img
              src="https://images.pexels.com/photos/1995842/pexels-photo-1995842.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Project 6"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </section>

      <section className=" flex items-center justify-center px-4">
        <div className="max-w-3xl text-center">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Lets Design Together
          </h1>

          {/* Description */}
          <p className="text-gray-700 text-base md:text-lg mb-10 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium
          </p>

          {/* Input + Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full sm:w-96 px-5 py-3 rounded-xl border border-gray-300 bg-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <button className="px-6 py-3 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600 transition duration-300">
              Send
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8 mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">© 2026 Istad. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
