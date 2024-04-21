import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  // Assuming we have a list of images and descriptions
  const items = [
    { src: "https://images.pexels.com/photos/1667427/pexels-photo-1667427.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "food", description: "Nice food" },
    { src: "https://images.pexels.com/photos/8478182/pexels-photo-8478182.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "more food", description: "More food" },
    // Add more items as needed
  ];

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Gallery</h1>
      <section className={styles.masonry}>
        {items.map((item, index) => (
          <div key={index} className={styles.card}>
            <Image
              src={item.src}
              alt={item.alt}
              width={500}  // Set fixed dimensions or make it responsive based on your design
              height={300}
              className={styles.image}
              layout="responsive"
            />
            <div className={styles.description}>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
