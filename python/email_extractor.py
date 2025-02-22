import re

text = "Contact me at test.email+123@domain.com and support@company.co.in"
emails = re.findall(r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b', text)

print(emails)  # Output: ['test.email+123@domain.com', 'support@company.co.in']
