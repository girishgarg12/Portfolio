import React from 'react';
import './Certificates.css';

// Import PDF files
import pdfNptel from '../assets/Certificates/Nptel Cloud Computing Certificate.pdf';
import pdfProgPath from '../assets/Certificates/Programmin pathshal Certificate.pdf';
import pdfGoogleCloud from '../assets/Certificates/Introduction to generative AI (Google cloud) Certificate.pdf';
import pdfInfosys from '../assets/Certificates/Certificate_Infosys_Build Generative AI Apps and Solutions with No-Code Tools.pdf';
import pdfGoogle from '../assets/Certificates/Coursera and google bits and bytes of CN.pdf';
import pdfCoursera from '../assets/Certificates/Interpersonal_Communication_for_Engineering_Certificate_12326736.pdf';

// Import Preview Images
import imgNptel from '../assets/Certificates/Prieview_Image_NPTEL_Cloud computing.png';
import imgProgPath from '../assets/Certificates/Prieview_Image_Programming Pathshala_Java SpringBoot.png';
import imgGoogleCloud from '../assets/Certificates/Prieview_Image_Google Cloud_Introduction to Generative AI.png';
import imgInfosys from '../assets/Certificates/Prieview_Image_Infosys_Build Generative AI Apps and Solutions with No-Code Tools.png';
import imgGoogle from '../assets/Certificates/Prieview_Image_Google_The Bits and Bytes of Computer Networking.png';
import imgCoursera from '../assets/Certificates/Prieview_Image_Coursera_Interpersonal Skills for Engineering Leaders.png';

const certificatesData = [
    {
        id: 1,
        title: "Cloud Computing",
        company: "NPTEL",
        image: imgNptel,
        link: pdfNptel
    },
    {
        id: 2,
        title: "Java SpringBoot",
        company: "Programming Pathshala",
        image: imgProgPath,
        link: pdfProgPath
    },
    {
        id: 3,
        title: "Introduction to Generative AI",
        company: "Google Cloud",
        image: imgGoogleCloud,
        link: pdfGoogleCloud
    },
    {
        id: 4,
        title: "Build Generative AI Apps and Solutions",
        company: "Infosys",
        image: imgInfosys,
        link: pdfInfosys
    },
    {
        id: 5,
        title: "The Bits and Bytes of Computer Networking",
        company: "Google",
        image: imgGoogle,
        link: pdfGoogle
    },
    {
        id: 6,
        title: "Interpersonal Skills for Engineering Leaders",
        company: "Coursera",
        image: imgCoursera,
        link: pdfCoursera
    }
];

const Certificates = () => {
    return (
        <section id="certificates" className="section-container">
            <div className="section-header">
                <h4 className="section-subtitle">CREDENTIALS</h4>
                <h2 className="section-title">Technical <span className="highlight-blue">Credentials</span></h2>
                <p className="section-desc">
                    A collection of professional certifications and technical acknowledgments from industry leaders and academic platforms, validating expertise across Cloud, AI, and Software Engineering.
                </p>
            </div>

            <div className="certificates-container">
                <div className="certificates-scroll">
                    {certificatesData.map((cert) => (
                        <div key={cert.id} className="certificate-card">
                            <div className="certificate-image-wrapper">
                                <img src={cert.image} alt={cert.title} className="certificate-image" />
                                <div className="certificate-overlay">
                                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="view-cert-btn">
                                        View PDF
                                    </a>
                                </div>
                            </div>
                            <div className="certificate-info">
                                <h3 className="cert-title" title={cert.title}>{cert.title}</h3>
                                <p className="cert-company">{cert.company}</p>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="scroll-hint">
                    <span>Scroll to explore &rarr;</span>
                </div>
            </div>
        </section>
    );
};

export default Certificates;
