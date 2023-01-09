import "./App.css";
import { useState } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

import cars from "./api/mock.car.json";

interface ICar {
  id: number;
  name: string;
  image: string;
  description: string;
}

export default function App() {
  const [items, setItems] = useState<ICar[]>(cars);

  return (
    <Box className="App">
      {items.map((item: ICar) => (
        <Card
          key={item.id}
          sx={{ marginRight: 2, marginBottom: 2, cursor: "-webkit-grab" }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={item.image}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}
