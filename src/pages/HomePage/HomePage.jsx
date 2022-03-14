import Akimbo from "../../components/Video/AKIMBO.mp4";
export default function HomePage() {
    return (
      <main>
      <h1>Home Page</h1>
      <video autoPlay loop muted
        style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1"
        }}
      >
          <source src={Akimbo} type="Video/mp4" />
      </video>
      </main>
    );
  }