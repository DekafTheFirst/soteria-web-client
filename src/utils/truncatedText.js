export function truncatedText(text, maxLength) {
    // Check if the text length exceeds the maxLength
    const truncatedText = text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  
    return truncatedText;
  }