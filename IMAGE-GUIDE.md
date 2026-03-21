# LYVRA Image Guide

A simple guide to updating images on your LYVRA website.

---

## Overview

Your website currently uses **7 images** from Unsplash, a free stock photo service. All images are loaded directly from Unsplash servers, which means:

- No images are stored in your project folder
- Images load from a CDN automatically
- You can swap images by changing photo IDs in the code

### Pages with Images

| Page | File Location |
|------|---------------|
| Homepage | `src/app/page.tsx` |
| Behind the Stitch | `src/app/behind-the-stitch/page.tsx` |
| The Studio | No images (application form only) |

---

## Three Ways to Update Images

### Method A: Upload to Your Project (Recommended for Permanent Images)

This puts images directly in your website folder. Best for brand photos, team images, or product shots you want to control.

**Steps:**

1. Create a folder: `public/images/` in your project root
2. Drop your image files there (JPG, PNG, or WebP)
3. Update the code to reference your image:

```tsx
// Instead of:
src="https://images.unsplash.com/photo-XXXXX"

// Use:
src="/images/your-photo.jpg"
```

### Method B: Swap Unsplash Photos (Easiest)

Just change the photo ID number in the URL. No file management needed.

**Steps:**

1. Find a photo on [unsplash.com](https://unsplash.com)
2. Copy the photo ID from the URL (the long string after `/photo-`)
3. Replace the ID in your code

**Example URL:**
```
https://images.unsplash.com/photo-1552374196-1ab2a1c593e8
```

**Photo ID:** `1552374196-1ab2a1c593e8`

---

### Method C: Use a Cloud CDN (Cloudinary, etc.)

Best for optimized images, automatic resizing, and better performance.

**Popular Options:**
- Cloudinary (free tier available)
- imgix
- Cloudflare Images

**Steps:**

1. Upload your image to your chosen CDN
2. Copy the CDN URL
3. Replace the Unsplash URL in your code

---

## Current Image Locations

Here's a table of all images currently on your site:

### Homepage (`src/app/page.tsx`)

| Line | Photo ID | Current Image | Purpose |
|------|----------|---------------|---------|
| 102 | `1552374196-1ab2a1c593e8` | Streetwear model | Hero visual (large banner) |
| 167 | `1515886657613-9f3515b0c78f` | High-fashion model | Editorial section |
| 209 | `1591047139829-d91aecb6caea` | Hoodie product | Archive product #1 |
| 210 | `1551488831-00ddcb6c6bd3` | Denim product | Archive product #2 |
| 211 | `1618354691373-d851c5c3a991` | Coach jacket product | Archive product #3 |

### Behind the Stitch (`src/app/behind-the-stitch/page.tsx`)

| Line | Photo ID | Current Image | Purpose |
|------|----------|---------------|---------|
| 63 | `1558769132-cb1aea458c5e` | Sewing machine | Entry 001: The Art of the Seam |
| 101 | `1489987707025-afc232f7ea0f` | Design studio | Entry 002: Atelier Spirits |

---

## How to Find an Unsplash Photo ID

### Step by Step:

1. Go to [unsplash.com](https://unsplash.com)
2. Search for something (e.g., "streetwear model")
3. Click on a photo you like
4. Look at the URL in your browser:

```
https://unsplash.com/photos/THIS-IS-THE-PHOTO-ID
```

5. Copy the photo ID (the part after `/photos/`)
6. Replace the ID in your code

### Full Unsplash URL Format:

```
https://images.unsplash.com/photo-[PHOTO-ID]?q=80&w=2000&auto=format&fit=crop
```

### Tips for Finding Good Photos:

- Look for photos with the aspect ratio you need (most sections use 4:5 or 16:9)
- High-resolution photos work best
- Try adding `&fit=crop&crop=center` to center the image if it looks off

---

## Image Requirements

### File Formats

| Format | Best For | Notes |
|--------|----------|-------|
| **JPG** | Photos with many colors | Small file size |
| **PNG** | Images with transparency | Larger file size |
| **WebP** | All images (modern) | Best compression |

### Recommended Sizes

| Image Use | Minimum Width | Recommended |
|-----------|---------------|-------------|
| Hero/banner images | 1920px | 2400px |
| Product images | 800px | 1200px |
| Editorial/thumbnails | 600px | 800px |

### Aspect Ratios

| Section | Ratio | Example |
|---------|-------|---------|
| Hero | 16:9 or 21:9 | Cinematic wide |
| Product grid | 3:4 | Portrait |
| Editorial stories | 4:5 or 1:1 | Square or tall |

---

## Important Notes

### Next.js Image Component

Your site uses Next.js `<Image>` component, which has some requirements:

**What it does automatically:**
- Lazy loads images (loads when scrolled into view)
- Resizes images for different screen sizes
- Prevents layout shifts

**You need to provide:**
- Correct dimensions OR an aspect ratio container
- Alt text for accessibility

### Common Issues

**Image looks stretched:**
- Make sure your container has the right aspect ratio
- The image should use `fill` with a parent that has defined dimensions

**Image not loading:**
- Check the URL is correct
- For local images, make sure the path starts with `/`

**Performance warnings:**
- Next.js may warn if an image is too small
- Try using larger images for better quality on retina displays

---

## Quick Reference: Replacing an Image

### To Change a Homepage Image:

1. Open: `src/app/page.tsx`
2. Find the Image component (around line 102 for hero, 167 for editorial)
3. Change the `src` URL:

```tsx
// Before:
src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8"

// After (your new photo):
src="https://images.unsplash.com/photo-YOUR-NEW-PHOTO-ID"
```

### To Change a Behind the Stitch Image:

1. Open: `src/app/behind-the-stitch/page.tsx`
2. Find the Image component (line 63 or 101)
3. Change the `src` URL the same way

---

## Need Help?

If you get stuck:

1. Check that the Unsplash URL is complete and correct
2. Make sure you replaced the entire photo ID (everything after `photo-`)
3. Save the file and refresh your browser
4. If images still don't load, check the browser console for errors

---

*Last updated: March 2026*
