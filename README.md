# use-unsaved-changes Hook

[![npm version](https://img.shields.io/npm/v/use-unsaved-changes.svg?style=flat-square)](https://www.npmjs.com/package/use-unsaved-changes)
[![npm downloads](https://img.shields.io/npm/dm/use-unsaved-changes.svg?style=flat-square)](https://www.npmjs.com/package/use-unsaved-changes)

![alt text](https://i.ibb.co/LvpL3Dd/unsavedshanges.png)


## Description

`use-unsaved-changes` is a custom React hook for managing unsaved changes in your App Router. It provides functionality to prompt users before leaving a page or navigating away when there are unsaved changes.

## Installation

You can install `use-unsaved-changes` using npm or bun:

```bash
npm install use-unsaved-changes
```
or 

```bash
bun install use-unsaved-changes
```

## Description

#### Example
```bash
import { useState } from 'react';
import { useUnsavedChanges } from 'use-unsaved-changes';

function MyComponent() {
  const { setIsDirty } = useUnsavedChanges();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setIsDirty(true); // Indicate unsaved changes
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
      />
      <button onClick={() => setIsDirty(false)}>Save Changes</button>
    </div>
  );
}

export default MyComponent;

```

## API

### `useUnsavedChanges()`

Returns an object with methods to manage unsaved changes state.

#### Methods

- `setIsDirty`: Function to set the state indicating unsaved changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


