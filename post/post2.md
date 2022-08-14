---
title: "Check our new library for code"
date: 2021-07-07  
description: "This is the first description i write on gridsome. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
"
tags: ['Aws', 'Python']
image:
  path: ../media/test.jpg
  alt: "A beautiful candle"
  caption: '<span> Nice candle by Franck Fesse <span>'
---

# Foobar
Foobar is a Python library for dealing with word pluralization.

## Installation

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.

```bash
pip install foobar
```

```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```

> Maurel is going home tomorrow
## Usage

```python
import foobar
from operator import ittemgetter

products = {"Hedphone": 55.90, "Usb drive": 12.30}

sort_by_price = sorted(products.items(), key=ittemgetter(1))
# returns 'words'
foobar.pluralize('word')

# returns 'geese'
foobar.pluralize('goose')

# returns 'phenomenon'
foobar.singularize('phenomena')
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
