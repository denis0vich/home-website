# The Haven - Dream Homes Website

A digital magazine exploring the emotional, financial, and psychological aspects of Filipino home design through personal narratives and professional insights.

## Project Structure

```
home-website/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   └── globals.css         # Global styles
├── components/            # React components
│   ├── Navigation.tsx     # Header/Navigation bar
│   ├── Hero.tsx           # Hero section with tagline
│   ├── FeaturedStories.tsx # Featured stories section
│   ├── BeyondFeatures.tsx # Beyond the Features preview
│   └── CTASection.tsx     # Call-to-action section
├── public/                # Static assets
│   └── logo.png           # The Haven logo
└── DREAM HOME CONTENT/    # Content assets and documents

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Next Steps

### Matching Figma Design

To match the Figma design exactly, you can:

1. **Export CSS from Figma Dev Mode**:
   - Open the Figma file: https://www.figma.com/design/mjJF5uwgT1UhRrQfQKsX7P/Dream-Homes
   - Enable Dev Mode (top right)
   - Copy CSS values for spacing, colors, fonts, etc.
   - Update `tailwind.config.ts` with custom colors
   - Update component styles in `components/` directory

2. **Use Figma API** (if you have access token):
   - Get design tokens and measurements programmatically
   - See: https://www.figma.com/developers/api

3. **Provide Design Specs**:
   - Share specific colors, fonts, spacing, and layout details
   - I can update the components to match exactly

## Pages to Build

- [x] Homepage
- [ ] Stories (Blair, Elijah, Lala + Professional Insights)
- [ ] Beyond the Features (Information Design, Sustainable Living, Financial Liberation)
- [ ] Gallery (Feels Like Home carousel + Our Gallery)
- [ ] Entertainment (Community Forum + Quizzes)
- [ ] About
- [ ] Contact

## Content

All content is extracted in `docx_content.txt` from the original Word documents.

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React** - UI library

