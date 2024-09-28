import React from 'react';
import { Box, Typography, Avatar, Card, CardContent, Button, Rating } from '@mui/material';

function ProductCard() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', p: 3, bgcolor: '#e0f7fa', minHeight: '100vh' }}>
      <Card sx={{ display: 'flex', maxWidth: 600, boxShadow: 3, borderRadius: 2 }}>
        <Box sx={{ width: '40%', borderRadius: '8px 0 0 8px', overflow: 'hidden' }}>
          <img
           src="https://5.imimg.com/data5/SELLER/Default/2024/1/380516394/CA/MJ/IL/62581795/designer-mens-sports-t-shirt-1000x1000.jpg" alt="Your Image" className="w-full h-full "

            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Box>
        <CardContent sx={{ width: '60%', p: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Avatar src="/path/to/shop-avatar.jpg" sx={{ mr: 2 }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#00796b' }}>
              Camus Printing Shop
            </Typography>
          </Box>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#d32f2f' }}>
            T-Shirt: Learn by Playing
          </Typography>
          <Typography variant="h6" sx={{ color: '#d32f2f', my: 1 }}>
            ₱150 - 200
          </Typography>
          <Typography variant="body2" sx={{ mb: 1, color: '#757575' }}>(100k orders)</Typography>
          <Rating value={4} readOnly sx={{ mb: 2 }} />
          <Typography variant="body2" sx={{ mb: 1, fontWeight: 'bold' }}>Designs:</Typography>
          <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
            <img src="https://5.imimg.com/data5/SELLER/Default/2024/1/380516394/CA/MJ/IL/62581795/designer-mens-sports-t-shirt-1000x1000.jpg" alt="Your Image" className="w-full h-full "  style={{ width: 50, height: 50, borderRadius: 4 }} />
            <img src="https://5.imimg.com/data5/SELLER/Default/2024/1/380516394/CA/MJ/IL/62581795/designer-mens-sports-t-shirt-1000x1000.jpg" alt="Your Image" className="w-full h-full "  style={{ width: 50, height: 50, borderRadius: 4 }} />
            <img src="https://5.imimg.com/data5/SELLER/Default/2024/1/380516394/CA/MJ/IL/62581795/designer-mens-sports-t-shirt-1000x1000.jpg" alt="Your Image" className="w-full h-full "  style={{ width: 50, height: 50, borderRadius: 4 }} />
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button variant="contained" color="primary">Chat</Button>
            <Button variant="contained" color="secondary">Buy Now</Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ProductCard;