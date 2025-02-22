
* \b – Ensures the match starts at a word boundary.
* [A-Za-z0-9._%+-]+ – Matches the username part before @
    Letters (A-Z, a-z), numbers (0-9), and special characters (._%+-) are allowed.
* @ – Matches the @ symbol.
* [A-Za-z0-9.-]+ – Matches the domain name (e.g., gmail, yahoo).
* \. – Matches the dot (.) before the domain extension.
* [A-Z|a-z]{2,} – Matches TLDs like .com, .org, .co.in (at least 2 letters).
* \b – Ensures the match ends at a word boundary.

