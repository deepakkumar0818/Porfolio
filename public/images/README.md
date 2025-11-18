# Images Folder Structure

This folder contains all images used in the portfolio website, organized by category following MVC-like organization principles.

## Folder Structure

```
images/
├── uploads/      # User-uploaded photos and images
├── projects/     # Project screenshots, mockups, and related images
├── blog/         # Blog post images, featured images, and thumbnails
├── profile/      # Profile pictures, avatars, and personal photos
├── gallery/      # General gallery images and portfolio showcases
└── assets/       # Static assets, icons, logos, and reusable images
```

## Usage Guidelines

### uploads/
- **Purpose**: Store user-uploaded photos and images
- **Use Case**: Images uploaded through forms, contact pages, or user submissions
- **Naming**: Use descriptive names with timestamps (e.g., `upload-2024-01-15-123456.jpg`)
- **Formats**: JPG, PNG, WebP recommended

### projects/
- **Purpose**: Project-related images
- **Use Case**: Screenshots, mockups, project thumbnails, project logos
- **Naming**: Match project slug (e.g., `erp-manufacturing-system-hero.jpg`)
- **Formats**: PNG for screenshots, JPG for photos, WebP for optimized versions

### blog/
- **Purpose**: Blog post images
- **Use Case**: Featured images, article thumbnails, inline images
- **Naming**: Match blog post slug (e.g., `building-scalable-applications-nextjs-14-featured.jpg`)
- **Formats**: JPG for photos, PNG for graphics, WebP for optimized

### profile/
- **Purpose**: Personal profile images
- **Use Case**: Profile pictures, avatars, headshots
- **Naming**: Use consistent naming (e.g., `profile-main.jpg`, `avatar.jpg`)
- **Formats**: PNG or JPG, square aspect ratio recommended

### gallery/
- **Purpose**: General gallery and showcase images
- **Use Case**: Portfolio showcases, image galleries, miscellaneous images
- **Naming**: Descriptive names (e.g., `gallery-work-1.jpg`)
- **Formats**: JPG, PNG, WebP

### assets/
- **Purpose**: Static assets and reusable images
- **Use Case**: Logos, icons, backgrounds, patterns, UI elements
- **Naming**: Descriptive names (e.g., `logo-main.png`, `background-pattern.svg`)
- **Formats**: SVG for icons/logos, PNG for graphics, JPG for photos

## Image Optimization Tips

1. **Compress images** before uploading to reduce file size
2. **Use WebP format** when possible for better compression
3. **Resize images** to appropriate dimensions (don't upload 4K images for thumbnails)
4. **Use descriptive filenames** that indicate content
5. **Keep file sizes under 500KB** for web performance

## Accessing Images in Code

Images in the `public/images/` folder can be accessed directly:

```tsx
// Example usage in Next.js
<Image 
  src="/images/projects/project-hero.jpg" 
  alt="Project Hero"
  width={800}
  height={600}
/>
```

## Notes

- All images in the `public` folder are served statically
- Images are included in the build output
- Consider using a CDN for production deployments
- Remember to optimize images for web performance

