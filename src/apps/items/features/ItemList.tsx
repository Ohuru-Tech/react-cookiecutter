import React, { useState, useEffect } from "react";

import { Box, Container, Grid, Skeleton, Typography } from "@mui/material";
import Page from "apps/common/components/Page";
import ItemListItem from "apps/items/components/ItemListItem";
import useItemStore from "apps/items/stores/itemsStore";

export function ItemsList() {
  const [{ items }, { fetchAllItems }] = useItemStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function getAllItems() {
      await fetchAllItems();
      setLoading(false);
    }
    getAllItems();
  }, []);

  return (
    <Page title="All Items">
      <Container maxWidth="xl">
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={10} md={10}>
            <Box sx={{ pt: 2, pl: 1, flexGrow: 1 }}>
              <Typography variant="h4">
                {loading ? <Skeleton height={60} /> : "Items"}
              </Typography>
            </Box>
          </Grid>
          {loading ? (
            <Grid item xs={12} sm={10} md={10}>
              <Skeleton variant="rectangular" height={80} width={80} />
            </Grid>
          ) : (
            <Grid item xs={12} sm={10} md={10}>
              {items.map((item) => (
                <ItemListItem key={item.id} item={item} />
              ))}
            </Grid>
          )}
        </Grid>
      </Container>
    </Page>
  );
}
