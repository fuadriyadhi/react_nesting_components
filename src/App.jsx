import React from "react";
import ImageCard from "./components/ImageCard";
import Paper from "./components/Paper";
import MobileLayout from "./layouts/MobileLayout";

export default function App() {
  return (
    <div>
      <h1>Halo React</h1>

      <MobileLayout>
        <h3>ini didalam Mobile Layout</h3>
        <Paper>
          <h1>Fuad</h1>
        </Paper>
        <Paper>
          <h1>Kata Orang</h1>
          <h3>Saya Ganteng</h3>
        </Paper>

        <ImageCard
          left={
            <div style={{ flex: 1 }}>
              <img
                src="https://images.pexels.com/photos/13741227/pexels-photo-13741227.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="ini gambar"
                style={{
                  width: 150,
                  height: 150,
                  objectFit: "cover",
                  borderRadius: 12,
                }}
              />
            </div>
          }
          right={
            <div style={{ flex: 3 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias consectetur incidunt rerum, laudantium et ducimus eligendi, eius qui natus repellat quidem rem quasi vitae beatae. Obcaecati tempora unde hic consequatur!
            </div>
          }
        />
      </MobileLayout>
    </div>
  );
}
