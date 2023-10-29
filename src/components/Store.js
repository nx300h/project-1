

const StoreSection = () => {
    return (
   <main className="store container">
    <div className="store-content">
    <h1>"Style Redefined, Your Fashion, Your Story."</h1>
    <p>
A clothing line is a collection of garments and accessories created by a fashion brand or designer. It offers customers a range of stylish and fashionable options to choose from. Each clothing line has its own unique style, theme, or concept that sets it apart from others. Whether it's high-end luxury or affordable fashion, clothing lines cater to different tastes, preferences, and budgets. They strive to provide customers with quality designs, trendy pieces, and a variety of options to suit their individual style. Customers can explore different clothing lines to find the perfect pieces that reflect their personality and make them feel confident and fashionable.</p>
   
   <div className="store-btn">
    <button className="secondary-btn">Category</button>
    <button>Shop Now</button>
   </div>

    <div className="shopping">
    <p>Also available on :</p>

    <div className="brand-icons">
        <img src="/images/amazon.png" alt="amazon-logo" />
        <img src="/images/ebay.png" alt="ebay-logo" />
    </div>
    </div>

    </div>
    <div className="store-image">
    <img src="/images/clothes_image.png" alt="store-image" />
    </div>
   </main>
    )
}

export default StoreSection;