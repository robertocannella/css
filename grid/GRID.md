# CSS Grid Poperties and Values
[MDN]()

## ```grid``` value
* The ```grid``` value for ```display``` property on a containing div creates a parent container.
```
.container {
    background: white;
    padding: 10px;
    border: 5px solid black;    
    display: grid;
}
```
The default behavior of the grid value creates a container containing one column and as many rows as there are direct child elements of that container.

```grid-template-columms```
* To add colums, demnsions can be specifed for each coloum to be displayed

```
.container {
    margin: 20px;
    display: grid;
    grid-template-columns: 200px auto 200px;
}
```

```fr``` (fraction)
* The ```fr``` value can be used specify a demension.  

```
.container {
    margin: 20px;
    display: grid;
    grid-template-columns: 200px 2fr 200px 1f;
}
```
In the above snippet, there are 4 columns specified.  The first and third columns are 200 pixels wide.  The remaining space is divided between column 2 and 4 based on the fraction specified.   In this case, the second column will be twice a big as the fourth column

```grid-template-rows```
* To add rows, demnsions can be specifed for each row to be displayed in the ```grid-template-rows``` property.

```
.container {
    margin: 20px;
    display: grid;
    grid-template-columns: 200px 2fr 200px 1f;
    grid-template-rows: 5rem 2.5rem;
}
```