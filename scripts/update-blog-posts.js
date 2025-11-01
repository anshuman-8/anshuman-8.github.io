const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const blogDir = path.join(process.cwd(), 'content/blog');

// Get all markdown files
const files = fs.readdirSync(blogDir);

files.forEach(filename => {
  const filePath = path.join(blogDir, filename);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);

  // Convert date format
  if (data.date) {
    const date = new Date(data.date);
    data.date = date.toISOString().split('T')[0];
  }

  // Convert tags to category
  if (data.tags && !data.category) {
    data.category = data.tags;
    delete data.tags;
  }

  // Remove slug if present (we'll use filename)
  if (data.slug) {
    delete data.slug;
  }

  // Create new frontmatter
  const newFrontmatter = matter.stringify(content, data);

  // Write back to file
  fs.writeFileSync(filePath, newFrontmatter);
}); 