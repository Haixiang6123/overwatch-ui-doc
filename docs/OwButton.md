# OwButton

## OwButton Types

There are 4 button types: `primary`, `warning`, `info`, `danger`.
```html
<ow-button type="primary">Primary</ow-button>
<ow-button type="warning">Warning</ow-button>
<ow-button type="info">Info</ow-button>
<ow-button type="danger">Danger</ow-button>
```

## OwButton with Icon

You can add an icon inside the button.

```html
<ow-button icon-name="setting">Setting</ow-button>
<ow-button icon-name="remove">Remove</ow-button>
```

Also, you can set its position as you like.

```html
<ow-button icon-name="up" icon-position="left">Up</ow-button>
<ow-button icon-name="down" icon-position="right">Down</ow-button>
```

Loading state is also available.

```html
<ow-button
    icon-name="loading"
    :is-loading="true">
    Loading...
</ow-button>
```

## Event

You can add a click event handler to this component.

```html
<ow-button
    @click="isLoading = !isLoading"
    icon-name="loading"
    :is-loading="isLoading">
    Loading...
</ow-button>
```

## OwButton Group

Sometimes, you may want to group several buttons like: 
buttons for next page and prev page.

```html
<ow-button-group>
    <ow-button icon-name="add" type="primary" icon-position="left">
        More
    </ow-button>
    <ow-button icon-name="subtract" type="primary" icon-position="right">
        Less
    </ow-button>
</ow-button-group>
```

## Properties

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| icon-name | Set name of icon in OwButton | String | - |
| icon-position | Set position of icon in OwButton | String | | "left" |
| is-loading | Set the loading status of OwButton | Boolean | false |
| type | Set type of OwButton | String | "warning" |
