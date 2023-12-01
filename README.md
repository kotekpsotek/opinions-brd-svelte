# Opinionsboard Svelte
Is the opinions board component [publicly avaiable on NPM](https://www.npmjs.com/settings/opinions-board/svelte), your customers etc. can use to estimate whatever: user profile, car, bike, photo, product.
Ready out of the box for Svelte

## Is avaiable for commercial?
Yes due to license, you can also buy me a tea

## Download from [npm](https://www.npmjs.com/settings/opinions-board/svelte) <!-- TODO: Add link to repo -->
```bash
$ npm install @opinions-board/svelte
```

## How to use
```html
    <script>
        import OpinionsBorad from "@opinions-board/svelte"

        const opinions = [
            {
                userName: "example user name",
                rating: 5.0,
                content: "ABC "
            }
        ];
    </script>

    <Board {opinions} targetSendOpinion={"http://localhost:5173"}/>
```
 ### Description
1. **opinions** - is a list of opinions objects in scheme
```typescript
    interface Opinions {
        /** is the user name whose was created a comment */
        userName: string,
        /** is the this user estimation in range 1.0 - 5.0 (float number) */
        rating: number,
        /** the opinion content */
        content: string
    }
```
2. **targetSendOpinions** - is the server address where new opinions will be send in such form
```typescript
    /* JSON - Will be send as "application/json" */
    interface SendOpinion {
        /** Sender email */
        email: string,
        /** Visible for others user name */
        userName: string,
        /** Comment title */
        title: string,
        /** Comment content */
        content: string
    }
```
>> 1. Server when comment is accepted should respond with ***http status 200*** which testifies for commponent that everything is great and user comment will be adding atop others (as fresh one)

* All such options given in example must be initialized with component

## Preview
[Video](https://youtu.be/qf7KFmTXO4g?feature=shared)
<details>
    <summary>
        <b>Images</b>
    </summary>
    <div>
        <p>Real word Usecase - Estimation of user profile</p>
        <img src="./docs/realword-usecase.png" alt="Real world usecase"/>
    </div>
    <div>
        <p>Raw previews</p>
        <img src="./docs/preview-atop.png" alt="Atop preview"/>
        <img src="./docs/preview-middle.png" alt="middle preview"/>
        <img src="./docs/preview-bottom-empty.png" alt="preview fill empty"/>
        <img src="./docs/preview-bottom-enrolled.png" alt="preview filled up"/>
    </div>
</details>

# License
Apache 2.0
