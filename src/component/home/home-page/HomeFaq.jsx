import React from "react";
import faqImg from "./img/doctors-day-cute-young-handsome-man-lab-coat-glasses-smiling-holding-notebook-removebg-preview 1.png";
import Accordion from "react-bootstrap/Accordion";

const HomeFaq = () => {
  const faqList = [
    {
      faqName: "How do book an appointment?",
      faqParagraph:
        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't ",
      faqId: 0,
    },
    {
      faqName: "How do book an appointment?",
      faqParagraph:
        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't ",
      faqId: 1,
    },
    {
      faqName: "How do book an appointment?",
      faqParagraph:
        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't ",
      faqId: 2,
    },
    {
      faqName: "How do book an appointment?",
      faqParagraph:
        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't ",
      faqId: 3,
    },
  ];

  return (
    <div className="home-faq">
      <div className="container">
        <div className="home-faq-content">
          <div className="home-faq-left">
            <Accordion defaultActiveKey={faqList[0].faqId}>
              {faqList.map((item) => {
                return (
                  <Accordion.Item eventKey={item.faqId} key={item.faqId}>
                    <Accordion.Header>{item.faqName}</Accordion.Header>
                    <Accordion.Body>{item.faqParagraph}</Accordion.Body>
                  </Accordion.Item>
                );
              })}
            </Accordion>
          </div>
          <div className="home-faq-right">
            <div className="section-header">
              <h5>FAQ’s</h5>
              <h2>Frequently Asked Questions</h2>
            </div>
            <img src={faqImg} alt={faqImg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFaq;
