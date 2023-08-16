function About() {
    return (
        <div style={{ height: "100vh", backgroundColor: "#1e1d1d" }}>
            <h2 style={{

                display: "flex",
                justifyContent: "center",
                paddingTop: "20vh"
            }}>Selamat Datang di Brasbresshop Kami</h2>
            <div>
                <div className="dekorasi" style={{ display: "flex", justifyContent: "center" }}>
                    <div style={{ height: "2px", width: "80px", backgroundColor: "#816042", marginTop: "20px" }}></div>
                    <img
                        src="kumis-removebg-preview.png" alt=""
                        height="40px"
                        width="40px"
                    />
                    <div style={{ height: "2px", width: "80px", backgroundColor: "#816042", marginTop: "20px" }}></div>
                </div>
            </div>
            <p style={{
                display: "flex",
                justifyContent: "center",
                padding: "10vh 22vw",
                textAlign: "center"
            }}>Barbershop atau biasa yang disebut oleh kalangan masyarakat Pangkas Rambut adalah suatu bisnis yang sedang
                berkembang dizamannya, entah itu nama saja yang berbeda tetapi bisnis ini memiliki nilai yang sangat prospek
                untuk jangka panjang dimana setiap orang bisa dipastikan memiliki rambut yang selalu tumbuh dan akan selalu dipotong</p>
        </div>
    )
}
export default About