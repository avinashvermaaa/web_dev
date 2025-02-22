import re

# Sample text containing URLs and domains
text = """
Visit https://www.google.com for search, or check www.github.com for coding.
My personal site is https://avinash.dev, and here's another http://example.org.
Some plain domains: openai.com, test-domain.net
"""

# Regex pattern to extract domain names
pattern = r'\b(?:https?:\/\/)?(?:www\.)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})\b'

# Find all matches
domains = re.findall(pattern, text)

# Print extracted domain names
print(domains)
