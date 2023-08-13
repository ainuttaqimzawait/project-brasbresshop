function Location() {
    return (
        <div style={{ height: "100vh", backgroundColor: "#353232" }}>
            <h1 style={{ display: "flex", justifyContent: "center", paddingTop: "20vh", paddingBottom: "5vh" }}>Lokasi</h1>
            <div className="maps" style={{ display: "flex" }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.
                53468620733!2d110.86953307525404!3d-6.826303093171532!2m3!1f0!2f0!3f0!3m
                2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70c55ef1868873%3A0x4187ee803aec2bc7!
                2sBARBERSHOP%20KEN&#39;E!5e0!3m2!1sid!2sid!4v1691929400047!5m2!1sid!2sid"
                    title="maps"
                    style={{
                        width: "100%", height: "60vh", style: "border:0;", allowfullscreen: "", loading: "lazy",
                        referrerpolicy: "no-referrer-when-downgrade"
                    }}></iframe>
            </div>
            {/* <div className="alamat" style={{ display: "flex" }}>
                <img style={{ height: "10px", width: "10px" }} src={`logo-map.svg`} alt="Logo" />;
                <p>Jepang RT 01/10, Jepang, Kec. Mejobo, Kabupaten Kudus, Jawa Tengah 59381</p>
            </div> */}
        </div>
    )
};
export default Location;