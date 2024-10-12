import sponsor1 from "../../../../assets/images/spon1.png";
import sponsor2 from "../../../../assets/images/spon2.png";
import sponsor3 from "../../../../assets/images/spon3.png";
import sponsor4 from "../../../../assets/images/spon4.png";
import sponsor5 from "../../../../assets/images/spon5.png";
import sponsor6 from "../../../../assets/images/spon6.png";

function Sponsors() {
  let imgs = [sponsor1, sponsor2, sponsor3, sponsor4, sponsor5, sponsor6];

  return (
    <section className="sponsor">
      <div className="container">
        <div className="row g-4">
          {imgs.map((img, index) => (
            <div key={index} className="col-xl-2 col-lg-3 col-md-4 col-6">
              <div className="sponsor-item text-center">
                <img src={img} alt="sponsor" className="w-50 h-100" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sponsors;
