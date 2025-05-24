const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

const postsDir = path.join(__dirname, '../content/posts')

function extractDateFromFilename(filename) {
  const match = filename.match(/^(\d{4}-\d{2}-\d{2})/)
  return match ? match[1] : null
}

function generateExcerpt(content) {
  // Remove markdown formatting and get first paragraph
  return content
    .split('\n\n')[0]
    .replace(/[#*`\[\]]/g, '')
    .replace(/!\[.*?\]\(.*?\)/g, '')
    .substring(0, 200)
    .trim() + '...'
}

function updatePost(filename) {
  const filePath = path.join(postsDir, filename)
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContent)
  
  // Extract date from filename
  const date = extractDateFromFilename(filename)
  
  // Update frontmatter
  const updatedData = {
    title: data.title,
    date: date || data.date,
    tags: data.tags || [],
    excerpt: data.excerpt || generateExcerpt(content)
  }
  
  // Remove Jekyll-specific fields
  delete updatedData.layout
  
  // Create updated content
  const updatedContent = matter.stringify(content, updatedData)
  
  // Write back to file
  fs.writeFileSync(filePath, updatedContent, 'utf8')
  console.log(`Updated: ${filename}`)
}

// Process all markdown files
try {
  const files = fs.readdirSync(postsDir)
  const markdownFiles = files.filter(file => file.endsWith('.md'))
  
  console.log(`Found ${markdownFiles.length} posts to update...`)
  
  markdownFiles.forEach(updatePost)
  
  console.log('All posts updated successfully!')
} catch (error) {
  console.error('Error updating posts:', error)
} 