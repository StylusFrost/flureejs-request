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

_Defined in index.ts:25_

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

_Defined in index.ts:24_

---

<a id="_senderpubkey"></a>

### ` <Private>``<Optional> ` \_senderPubKey

**● \_senderPubKey**: _`Buffer`_

_Defined in index.ts:25_

---

<a id="auth"></a>

### auth

**● auth**: _`Buffer`_

_Defined in index.ts:19_

---

<a id="db"></a>

### db

**● db**: _`Buffer`_

_Defined in index.ts:17_

---

<a id="formatteddate"></a>

### formattedDate

**● formattedDate**: _`Buffer`_

_Defined in index.ts:18_

---

<a id="host"></a>

### host

**● host**: _`Buffer`_

_Defined in index.ts:16_

---

<a id="param"></a>

### param

**● param**: _`Buffer`_

_Defined in index.ts:14_

---

<a id="r"></a>

### r

**● r**: _`Buffer`_

_Defined in index.ts:21_

---

<a id="raw"></a>

### raw

**● raw**: _`Buffer`[]_

_Defined in index.ts:13_

---

<a id="s"></a>

### s

**● s**: _`Buffer`_

_Defined in index.ts:22_

---

<a id="type"></a>

### type

**● type**: _`Buffer`_

_Defined in index.ts:15_

---

<a id="v"></a>

### v

**● v**: _`Buffer`_

_Defined in index.ts:20_

---

## Methods

<a id="_overridevsetterwithvalidation"></a>

### `<Private>` \_overrideVSetterWithValidation

▸ **\_overrideVSetterWithValidation**(): `void`

_Defined in index.ts:133_

**Returns:** `void`

---

<a id="_validatev"></a>

### `<Private>` \_validateV

▸ **\_validateV**(v: _`Buffer`_): `void`

_Defined in index.ts:121_

**Parameters:**

| Name         | Type     |
| ------------ | -------- |
| `Optional` v | `Buffer` |

**Returns:** `void`

---

<a id="getsenderauthid"></a>

### getSenderAuthID

▸ **getSenderAuthID**(): `Buffer`

_Defined in index.ts:150_

**Returns:** `Buffer`

---

<a id="getsenderpublickey"></a>

### getSenderPublicKey

▸ **getSenderPublicKey**(): `Buffer`

_Defined in index.ts:162_

**Returns:** `Buffer`

---

<a id="sign"></a>

### sign

▸ **sign**(privateKey: _`Buffer`_): `void`

_Defined in index.ts:216_

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

_Defined in index.ts:195_

**Returns:** `boolean`

_Defined in index.ts:196_

**Parameters:**

| Name        | Type    |
| ----------- | ------- |
| stringError | `false` |

**Returns:** `boolean`

_Defined in index.ts:197_

**Parameters:**

| Name        | Type   |
| ----------- | ------ |
| stringError | `true` |

**Returns:** `string`

---

<a id="verifysignature"></a>

### verifySignature

▸ **verifySignature**(): `boolean`

_Defined in index.ts:174_

**Returns:** `boolean`

---
