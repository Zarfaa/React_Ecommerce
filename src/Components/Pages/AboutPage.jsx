import React from 'react'
import Footer from '../Footer/Footer'
const AboutPage = () => {
  return (
    <>
      <div className="container my-3 py-3">
      <h2 className="text-center">About Us - Our Story</h2>
      <p >Welcome to our online store, your one-stop destination for all things fashionable and trendy! We are a leading eCommerce website specializing in offering high-quality men's clothing, women's clothing, women's jewelry, and electronics.</p>

      <h3 >Our Vision</h3>
      <p >At our store, our vision is to provide our customers with a delightful shopping experience by curating the latest and most stylish products in the fashion and electronics industries. We aim to be the go-to destination for fashion-forward individuals seeking top-notch clothing and accessories for both men and women, as well as the latest electronic gadgets and tech innovations.</p>

      <h3 >Wide Selection of Men's and Women's Clothing</h3>
      <p >For fashion enthusiasts, we have a diverse collection of men's and women's clothing that caters to all tastes and styles. Whether you're looking for elegant formal wear, casual everyday outfits, or trendy athleisure wear, we've got you covered. Our range of clothing is thoughtfully chosen to bring you the latest fashion trends and wardrobe essentials.</p>

      <h3 >Exquisite Women's Jewelry</h3>
      <p >We take pride in offering an exquisite selection of women's jewelry, designed to add a touch of glamour and elegance to any ensemble. From dazzling necklaces and statement earrings to delicate bracelets and stylish rings, our jewelry collection will be sure to turn heads and make you shine.</p>

      <h3 >Cutting-Edge Electronics</h3>
      <p >Tech enthusiasts can explore our wide range of cutting-edge electronic products and gadgets. From the latest smartphones and tablets to smartwatches and other gadgets, we have everything you need to stay connected and up-to-date with the latest technology.</p>

      <h3 >Quality and Customer Satisfaction</h3>
      <p >We are committed to delivering products of the highest quality to our customers. Our team meticulously selects products from trusted brands and manufacturers to ensure you receive only the best. Your satisfaction is our top priority, and we strive to provide excellent customer service and support throughout your shopping journey.</p>

      <h3 >Stay Updated with Fashion and Tech</h3>
      <p >Follow our blog and social media channels to stay updated with the latest fashion trends, styling tips, and tech news. We are dedicated to keeping you informed and inspired, so you can make the best choices when it comes to your personal style and technology needs.</p>

      <h3 >Shop with Confidence</h3>
      <p >Shop with confidence on our secure and user-friendly website. Our streamlined checkout process ensures a hassle-free shopping experience, and we offer flexible payment options for your convenience.</p>

      <p >Thank you for choosing our online store. We look forward to serving you with the best in fashion and technology. Happy shopping!</p>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Mens's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Women's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Jewelery</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Electronics</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage