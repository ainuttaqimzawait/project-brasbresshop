import "./testimony.css";



function Testimony() {
    return (
        <div className="testimony">
            <h2>Testimoni</h2>
            <div class="slide-container">
                <div className="swiper-wrapper">
                    <div class="card-wrapper">
                        <div class="card swiper-slide">
                            <div class="image-box">
                                <div style={{ display: "block", height: "100px", width: "100px" }}></div>
                            </div>
                            <div class="profile-details">
                                <div style={{ display: "block", height: "20px", width: "20px" }}></div>
                                <div class="name-job">
                                    <h3 class="name">slide 1</h3>
                                    <h4 class="job">Full Stack Developer</h4>
                                </div>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-box">
                                <div style={{ display: "block", height: "100px", width: "100px" }}></div>
                            </div>
                            <div class="profile-details">
                                <div style={{ display: "block", height: "20px", width: "20px" }}></div>
                                <div class="name-job">
                                    <h3 class="name">Slide 2</h3>
                                    <h4 class="job">Photographer</h4>
                                </div>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-box">
                                <div style={{ display: "block", height: "100px", width: "100px" }}></div>
                            </div>
                            <div class="profile-details">
                                <div style={{ display: "block", height: "20px", width: "20px" }}></div>
                                <div class="name-job">
                                    <h3 class="name">Richard Bond</h3>
                                    <h4 class="job">Data Analyst</h4>
                                </div>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-box">
                                <div style={{ display: "block", height: "100px", width: "100px" }}></div>
                            </div>
                            <div class="profile-details">
                                <div style={{ display: "block", height: "20px", width: "20px" }}></div>
                                <div class="name-job">
                                    <h3 class="name">Priase</h3>
                                    <h4 class="job">App Developer</h4>
                                </div>
                            </div>
                        </div>
                        <div class="card swiper-slide">
                            <div class="image-box">
                                <div style={{ display: "block", height: "100px", width: "100px" }}></div>
                            </div>
                            <div class="profile-details">
                                <div style={{ display: "block", height: "20px", width: "20px" }}></div>
                                <div class="name-job">
                                    <h3 class="name">James Laze</h3>
                                    <h4 class="job">Blogger</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navigation">
                <button className="prev" onClick="onSlide(-1)">&#10094;</button>
                <button className="next" onClick="onSlide(1)">&#10095;</button>
            </div>
        </div>
    )
};
export default Testimony;