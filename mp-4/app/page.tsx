'use client';

import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import {
  Box,
    Button,
    Container,
    TextField,
    Typography,
    List,
    ListItem,
    Link as MUILink,
    Alert,
} from '@mui/material'

export default function HomePage() {
  const [query, setQuery] = useState('');
  interface ArtRecord {
    id: number;
    title: string;
    people?: { name: string }[];
  }
  const [results, setResults] = useState<ArtRecord[]>([]);
  const [error, setError] = useState('');

  const searchArt = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setResults([]);

    try {
      const res = await fetch(`/api/art?q=${encodeURIComponent(query)}`);
      const data = await res.json();

      if (data.error) {
        setError(data.error);
      } else {
        setResults(data.records);
      }
    } catch {
      setError('Something went wrong.');
    }
  };

  return (
      <Container maxWidth="md">
        <Box mt={4}>
          <Typography variant="h4" gutterBottom>
            Harvard Art Search
          </Typography>
          <Box component="form" onSubmit={searchArt} display="flex" gap={2} mb={3}>
            <TextField
                fullWidth
                label="Search artworks..."
                variant="outlined"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <Button type="submit" variant="contained" color="primary">
              Search
            </Button>
          </Box>
          {error && <Alert severity="error">{error}</Alert>}
          <List>
            {results.map((art) => (
                <ListItem key={art.id}>
                  <MUILink
                      component={Link}
                      href={`/art/${art.id}`}
                      underline="hover"
                      color="primary"
                  >
                    {art.title} {art.people?.[0]?.name && `– ${art.people[0].name}`}
                  </MUILink>
                </ListItem>
            ))}
          </List>
        </Box>
      </Container>
  );
}