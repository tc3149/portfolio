import "./portfolio.scss";

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li className="active">Featured</li>
        <li>Web App</li>
        <li>Mobile App</li>
        <li>Design</li>
        <li>Branding</li>
      </ul>
      <div className="container">
        <div className="item">
          <img
            src="https://www.bankfirst.com.au/-/media/bankfirst/assets/xup-tile/191205_app2_account_v1.jpg?h=573&iar=0&w=1024&hash=DB6509A7AEDF35CE57A2A01B29BA655E"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  );
}
