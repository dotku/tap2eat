# 🎨 Assets Replacement Guide

## Current Status
✅ All placeholder images are now loading correctly (HTTP 200)

## File Structure

```
tap2eat-card/public/images/
├── logo.svg              # Company logo (200x200px orange with "T2E")
├── hots/
│   ├── item1.svg        # Hot item placeholder 1 (orange)
│   ├── item2.svg        # Hot item placeholder 2
│   ├── item3.svg        # Hot item placeholder 3
│   └── item4.svg        # Hot item placeholder 4
├── news/
│   ├── news1.svg        # News placeholder 1
│   ├── news2.svg        # News placeholder 2
│   ├── news3.svg        # News placeholder 3
│   └── news4.svg        # News placeholder 4
└── more/
    ├── img1.svg         # More content placeholder 1
    ├── img2.svg         # More content placeholder 2
    ├── img3.svg         # More content placeholder 3
    ├── img4.svg         # More content placeholder 4
    ├── img5.svg         # More content placeholder 5
    └── img6.svg         # More content placeholder 6
```

## How to Replace Placeholders

### Option 1: Keep Same Names (Easiest)
Simply replace the SVG files with your actual images (JPG, PNG, or SVG):

```bash
# Replace logo
cp your-logo.png public/images/logo.svg  # or logo.png

# Replace hot items
cp your-hot1.jpg public/images/hots/item1.svg  # or .jpg/.png

# And so on...
```

### Option 2: Use Different Names
1. Add your images to the public/images folder
2. Update the paths in `lib/constants.ts`:

```typescript
export const GALLERY_IMAGES = {
  hots: [
    '/images/hots/your-image-1.jpg',
    '/images/hots/your-image-2.jpg',
    // ... etc
  ],
  // ...
}
```

## Image Recommendations

### Logo
- **Format**: PNG or SVG
- **Size**: 200x200px minimum
- **Background**: Transparent recommended
- **Used in**: Header (48x48px display size)

### Gallery Images (Hots, News, More)
- **Format**: JPG, PNG, or SVG
- **Size**: 600x600px minimum (square aspect ratio)
- **File Size**: < 500KB per image for optimal loading
- **Used in**: Gallery grids with lightbox view

### Video
- **Location**: `public/videos/showcase.mp4`
- **Format**: MP4 (H.264 codec)
- **Resolution**: 1280x720 or 1920x1080
- **Duration**: 30-90 seconds recommended
- **File Size**: < 50MB

## Testing Your Images

After replacing images, test at:
- http://localhost:3001/en
- http://localhost:3001/zh-CN
- http://localhost:3001/zh-TW
- http://localhost:3001/es

All galleries should display your new images with:
- Hover effects
- Lightbox (click to enlarge)
- Responsive layout (1-4 columns depending on screen size)

## Need Help?

If images aren't displaying:
1. Check file extensions match those in `lib/constants.ts`
2. Verify files are in `public/images/` (not `/images/`)
3. Clear browser cache (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
4. Restart dev server: `npm run dev`
