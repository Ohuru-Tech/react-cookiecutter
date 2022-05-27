import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Grid,
  IconButton,
  Skeleton,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import { useParams, Link as RouterLink } from "react-router-dom";
//
import { Icon } from "@iconify/react";
import arrowFill from "@iconify/icons-eva/arrow-back-fill";
import editIcon from "@iconify/icons-eva/edit-2-fill";
//
import Page from "apps/common/components/Page";
import useItemStore from "apps/items/stores/itemsStore";

export function ItemDetails() {
  const params = useParams();
  const itemId = parseInt(params.id as string);
  const [{ selectedItemId, selectedItem }, { fetchItem, setItemId }] =
    useItemStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getItem() {
      await setItemId(itemId);
      await fetchItem();
      setLoading(false);
    }

    getItem();
  }, [itemId, selectedItemId]);

  return (
    <Page title="Item Details">
      <Container maxWidth="xl">
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={10} md={10}>
            <Box sx={{ pt: 2 }}>
              <Button variant="text" component={RouterLink} to="/items/all">
                <Icon icon={arrowFill} color="#46C084" height={30} /> Back to
                items
              </Button>
            </Box>
            <Box sx={{ pt: 2, pl: 1 }}>
              <Typography variant="h4">
                {loading ? <Skeleton height={60} /> : selectedItem.name}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={10} md={10}>
            {loading ? (
              <Skeleton variant="rectangular" height={200} />
            ) : (
              <Card>
                <CardHeader
                  title="Item Details"
                  subheader="Details about the selected item"
                  action={
                    <IconButton aria-label="edit">
                      <Icon icon={editIcon} color="primary" />
                    </IconButton>
                  }
                />
              </Card>
            )}
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
