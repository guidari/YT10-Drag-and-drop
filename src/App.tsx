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

import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap,
} from "react-grid-dnd";

import cars from "./api/mock.car.json";

interface ICar {
  id: number;
  name: string;
  image: string;
  description: string;
}

export default function App() {
  const [items, setItems] = useState<ICar[]>(cars);

  function onChange(
    sourceId: string,
    sourceIndex: number,
    targetIndex: number
  ) {
    const nextState = swap(items, sourceIndex, targetIndex);
    setItems(nextState);
  }

  return (
    <Box className="App">
      <GridContextProvider onChange={onChange}>
        <GridDropZone
          id="items"
          boxesPerRow={4}
          rowHeight={280}
          style={{ height: 280 * Math.ceil(items.length / 4) }}
        >
          {items.map((item: ICar) => (
            <GridItem key={item.id}>
              <Card
                sx={{ marginRight: 2, marginBottom: 2, cursor: "-webkit-grab" }}
              >
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
              </Card>
            </GridItem>
          ))}
        </GridDropZone>
      </GridContextProvider>

      <button type="button" onClick={() => console.log("state", items)}>
        State
      </button>
    </Box>
  );
}
