[flureejs-request](../README.md) > [Request](../classes/request.md)

# Class: Request

## Hierarchy

**Request**

## Index

### Constructors

- [constructor](request.md#constructor)

### Properties

- [\_from](request.md#_from)
- [\_senderPubKey](request.md#_senderpubkey)
- [auth](request.md#auth)
- [db](request.md#db)
- [formattedDate](request.md#formatteddate)
- [host](request.md#host)
- [param](request.md#param)
- [r](request.md#r)
- [raw](request.md#raw)
- [s](request.md#s)
- [type](request.md#type)
- [v](request.md#v)

### Methods

- [\_overrideVSetterWithValidation](request.md#_overridevsetterwithvalidation)
- [\_validateV](request.md#_validatev)
- [getSenderAuthID](request.md#getsenderauthid)
- [getSenderPublicKey](request.md#getsenderpublickey)
- [sign](request.md#sign)
- [validate](request.md#validate)
- [verifySignature](request.md#verifysignature)

---

## Constructors

<a id="constructor"></a>

### constructor

⊕ **new Request**(data?: _[RequestData](../interfaces/requestdata.md)_): [Request](request.md)

_Defined in [index.ts:25](https://github.com/StylusFrost/flureejs-request/blob/415684d/src/index.ts#L25)_

**Parameters:**

| Name                 | Type                                        | Default value | Description                                                       |
| -------------------- | ------------------------------------------- | ------------- | ----------------------------------------------------------------- |
| `Default value` data | [RequestData](../interfaces/requestdata.md) | {}            | A request can be initialized with object containing them by name. |

**Returns:** [Request](request.md)

---

## Properties

<a id="_from"></a>

### ` <Protected>``<Optional> ` \_from

**● \_from**: _`Buffer`_

_Defined in [index.ts:24](https://github.com/StylusFrost/flureejs-request/blob/415684d/src/index.ts#L24)_

---

<a id="_senderpubkey"></a>

### ` <Private>``<Optional> ` \_senderPubKey

**● \_senderPubKey**: _`Buffer`_

_Defined in [index.ts:25](https://github.com/StylusFrost/flureejs-request/blob/415684d/src/index.ts#L25)_

---

<a id="auth"></a>

### auth

**● auth**: _`Buffer`_

_Defined in [index.ts:19](https://github.com/StylusFrost/flureejs-request/blob/415684d/src/index.ts#L19)_

---

<a id="db"></a>

### db

**● db**: _`Buffer`_

_Defined in [index.ts:17](https://github.com/StylusFrost/flureejs-request/blob/415684d/src/index.ts#L17)_

---

<a id="formatteddate"></a>

### formattedDate

**● formattedDate**: _`Buffer`_

_Defined in [index.ts:18](https://github.com/StylusFrost/flureejs-request/blob/415684d/src/index.ts#L18)_

---

<a id="host"></a>

### host

**● host**: _`Buffer`_

_Defined in [index.ts:16](https://github.com/StylusFrost/flureejs-request/blob/415684d/src/index.ts#L16)_

---

<a id="param"></a>

### param

**● param**: _`Buffer`_

_Defined in [index.ts:14](https://github.com/StylusFrost/flureejs-request/blob/415684d/src/index.ts#L14)_

---

<a id="r"></a>

### r

**● r**: _`Buffer`_

_Defined in [index.ts:21](https://github.com/StylusFrost/flureejs-request/blob/415684d/src/index.ts#L21)_

---

<a id="raw"></a>

### raw

**● raw**: _`Buffer`[]_

_Defined in [index.ts:13](https://github.com/StylusFrost/flureejs-request/blob/415684d/src/index.ts#L13)_

---

<a id="s"></a>

### s

**● s**: _`Buffer`_

_Defined in [index.ts:22](https://github.com/StylusFrost/flureejs-request/blob/415684d/src/index.ts#L22)_

---

<a id="type"></a>

### type

**● type**: _`Buffer`_

_Defined in [index.ts:15](https://github.com/StylusFrost/flureejs-request/blob/415684d/src/index.ts#L15)_

---

<a id="v"></a>

### v

**● v**: _`Buffer`_

_Defined in [index.ts:20](https://github.com/StylusFrost/flureejs-request/blob/415684d/src/index.ts#L20)_

---

## Methods

<a id="_overridevsetterwithvalidation"></a>

### `<Private>` \_overrideVSetterWithValidation

▸ **\_overrideVSetterWithValidation**(): `void`

_Defined in [index.ts:133](https://github.com/StylusFrost/flureejs-request/blob/415684d/src/index.ts#L133)_

**Returns:** `void`

---

<a id="_validatev"></a>

### `<Private>` \_validateV

▸ **\_validateV**(v: _`Buffer`_): `void`

_Defined in [index.ts:121](https://github.com/StylusFrost/flureejs-request/blob/415684d/src/index.ts#L121)_

**Parameters:**

| Name         | Type     |
| ------------ | -------- |
| `Optional` v | `Buffer` |

**Returns:** `void`

---

<a id="getsenderauthid"></a>

### getSenderAuthID

▸ **getSenderAuthID**(): `Buffer`

_Defined in [index.ts:150](https://github.com/StylusFrost/flureejs-request/blob/415684d/src/index.ts#L150)_

**Returns:** `Buffer`

---

<a id="getsenderpublickey"></a>

### getSenderPublicKey

▸ **getSenderPublicKey**(): `Buffer`

_Defined in [index.ts:162](https://github.com/StylusFrost/flureejs-request/blob/415684d/src/index.ts#L162)_

**Returns:** `Buffer`

---

<a id="sign"></a>

### sign

▸ **sign**(privateKey: _`Buffer`_): `void`

_Defined in [index.ts:216](https://github.com/StylusFrost/flureejs-request/blob/415684d/src/index.ts#L216)_

**Parameters:**

| Name       | Type     | Description |
| ---------- | -------- | ----------- |
| privateKey | `Buffer` |             |

**Returns:** `void`

---

<a id="validate"></a>

### validate

▸ **validate**(): `boolean`

▸ **validate**(stringError: _`false`_): `boolean`

▸ **validate**(stringError: _`true`_): `string`

_Defined in [index.ts:195](https://github.com/StylusFrost/flureejs-request/blob/415684d/src/index.ts#L195)_

**Returns:** `boolean`

_Defined in [index.ts:196](https://github.com/StylusFrost/flureejs-request/blob/415684d/src/index.ts#L196)_

**Parameters:**

| Name        | Type    |
| ----------- | ------- |
| stringError | `false` |

**Returns:** `boolean`

_Defined in [index.ts:197](https://github.com/StylusFrost/flureejs-request/blob/415684d/src/index.ts#L197)_

**Parameters:**

| Name        | Type   |
| ----------- | ------ |
| stringError | `true` |

**Returns:** `string`

---

<a id="verifysignature"></a>

### verifySignature

▸ **verifySignature**(): `boolean`

_Defined in [index.ts:174](https://github.com/StylusFrost/flureejs-request/blob/415684d/src/index.ts#L174)_

**Returns:** `boolean`

---
