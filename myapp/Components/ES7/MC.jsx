import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import image from "./images/image.jpg";
import image1 from "./images/image1.png";
export default function MC() {
    const cardData = [
  {
    id: 1,
    title: "Cat",
    image: image,
    description:
      "The cat (Felis catus) is a small carnivorous mammal. It is an obligate carnivore, requiring a predominantly meat-based diet.",
    details: [
      "Lifespan: 13-20 years",
      "Gestation period: 65 days",
      "Daily Sleep: 12-16 hours",
    ],
  },
  {
    id: 2,
    title: "Lizard",
    image: image1,
    description:
      "Lizard is the common name used for all squamate reptiles other than snakes, encompassing over 7,000 species, ranging across all continents except Antarctica, as well as most oceanic island chains.",
    details: [
      "Types: Chameleon, Crested Gecko, Green Anole, Iguana",
      "Scientific name: Lacertilia",
      "Species: Reptiles",
    ],
  }
];

  return (
    <div style={{ display: "flex", gap: "20px" }}>
    {/* Card data*/}
      {cardData.map((item) => (
        <Card sx={{ maxWidth: 345 }} key={item.id}>
          
          <CardMedia
            sx={{ height: 240 }}
            image={item.image}
            title={item.title}
          />

          <CardContent>
            <Typography gutterBottom variant="h5">
              {item.title}
            </Typography>

            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {item.description}
            </Typography>

            <ul style={{ color: "grey" }}>
              {item.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </CardContent>

          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>

        </Card>
      ))}
    </div>
  );
}
