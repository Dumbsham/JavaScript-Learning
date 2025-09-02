# JavaScript Notes

## 1. DOM (Document Object Model)
- Represents the structure of HTML documents as a tree of objects.
- Allows JS to access and manipulate HTML elements.
- Common methods:
    - `getElementById('id')`
    - `getElementsByClassName('class')`
    - `querySelector('selector')`
    - `createElement('tag')`
    - `appendChild(node)`
- Example:
    ```js
    document.getElementById('demo').textContent = 'Hello DOM!';
    ```

## 2. Events & Event Handling
- Events: Actions like click, submit, mouseover, etc.
- Event handling: Responding to events using functions (event listeners).
- Common methods:
    - `addEventListener('event', handler)`
    - `removeEventListener('event', handler)`
- Example:
    ```js
    document.getElementById('btn').addEventListener('click', function() {
        alert('Button clicked!');
    });
    ```

## 3. Forms and Form Validation
- Forms collect user input.
- Validation ensures data is correct before submission.
- Can use HTML attributes (`required`, `type="email"`) or JS.
- Example:
    ```js
    document.querySelector('form').addEventListener('submit', function(e) {
        if(document.getElementById('email').value === '') {
            e.preventDefault();
            alert('Email is required!');
        }
    });
    ```

## 4. Timers and Interval
- `setTimeout(fn, ms)`: Runs function once after delay.
- `setInterval(fn, ms)`: Runs function repeatedly at interval.
- `clearTimeout(id)`, `clearInterval(id)`: Stop timers.
- Example:
    ```js
    setTimeout(() => { console.log('Hello after 1s'); }, 1000);
    let id = setInterval(() => { console.log('Repeats'); }, 2000);
    clearInterval(id);
    ```

## 5. localStorage, sessionStorage, cookies
- **localStorage**: Stores data with no expiration.
    ```js
    localStorage.setItem('key', 'value');
    let val = localStorage.getItem('key');
    ```
- **sessionStorage**: Stores data for one session/tab.
    ```js
    sessionStorage.setItem('key', 'value');
    ```
- **Cookies**: Small data stored with expiration, sent to server.
    ```js
    document.cookie = "username=John; expires=Fri, 31 Dec 2024 23:59:59 UTC";
    ```
- Use for saving user preferences, authentication, etc.
