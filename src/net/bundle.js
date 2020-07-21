/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const msg = $root.msg = (() => {

    /**
     * Namespace msg.
     * @exports msg
     * @namespace
     */
    const msg = {};

    msg.CSBroadcastMultiple = (function() {

        /**
         * Properties of a CSBroadcastMultiple.
         * @memberof msg
         * @interface ICSBroadcastMultiple
         * @property {msg.MsgType|null} [msgType] CSBroadcastMultiple msgType
         * @property {string|null} [text] CSBroadcastMultiple text
         * @property {string|null} [image] CSBroadcastMultiple image
         * @property {string|null} [video] CSBroadcastMultiple video
         */

        /**
         * Constructs a new CSBroadcastMultiple.
         * @memberof msg
         * @classdesc Represents a CSBroadcastMultiple.
         * @implements ICSBroadcastMultiple
         * @constructor
         * @param {msg.ICSBroadcastMultiple=} [properties] Properties to set
         */
        function CSBroadcastMultiple(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CSBroadcastMultiple msgType.
         * @member {msg.MsgType} msgType
         * @memberof msg.CSBroadcastMultiple
         * @instance
         */
        CSBroadcastMultiple.prototype.msgType = 0;

        /**
         * CSBroadcastMultiple text.
         * @member {string} text
         * @memberof msg.CSBroadcastMultiple
         * @instance
         */
        CSBroadcastMultiple.prototype.text = "";

        /**
         * CSBroadcastMultiple image.
         * @member {string} image
         * @memberof msg.CSBroadcastMultiple
         * @instance
         */
        CSBroadcastMultiple.prototype.image = "";

        /**
         * CSBroadcastMultiple video.
         * @member {string} video
         * @memberof msg.CSBroadcastMultiple
         * @instance
         */
        CSBroadcastMultiple.prototype.video = "";

        /**
         * Creates a new CSBroadcastMultiple instance using the specified properties.
         * @function create
         * @memberof msg.CSBroadcastMultiple
         * @static
         * @param {msg.ICSBroadcastMultiple=} [properties] Properties to set
         * @returns {msg.CSBroadcastMultiple} CSBroadcastMultiple instance
         */
        CSBroadcastMultiple.create = function create(properties) {
            return new CSBroadcastMultiple(properties);
        };

        /**
         * Encodes the specified CSBroadcastMultiple message. Does not implicitly {@link msg.CSBroadcastMultiple.verify|verify} messages.
         * @function encode
         * @memberof msg.CSBroadcastMultiple
         * @static
         * @param {msg.ICSBroadcastMultiple} message CSBroadcastMultiple message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSBroadcastMultiple.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msgType != null && Object.hasOwnProperty.call(message, "msgType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.msgType);
            if (message.text != null && Object.hasOwnProperty.call(message, "text"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.text);
            if (message.image != null && Object.hasOwnProperty.call(message, "image"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.image);
            if (message.video != null && Object.hasOwnProperty.call(message, "video"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.video);
            return writer;
        };

        /**
         * Encodes the specified CSBroadcastMultiple message, length delimited. Does not implicitly {@link msg.CSBroadcastMultiple.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.CSBroadcastMultiple
         * @static
         * @param {msg.ICSBroadcastMultiple} message CSBroadcastMultiple message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSBroadcastMultiple.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CSBroadcastMultiple message from the specified reader or buffer.
         * @function decode
         * @memberof msg.CSBroadcastMultiple
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.CSBroadcastMultiple} CSBroadcastMultiple
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSBroadcastMultiple.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.CSBroadcastMultiple();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.msgType = reader.int32();
                    break;
                case 2:
                    message.text = reader.string();
                    break;
                case 3:
                    message.image = reader.string();
                    break;
                case 4:
                    message.video = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CSBroadcastMultiple message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.CSBroadcastMultiple
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.CSBroadcastMultiple} CSBroadcastMultiple
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSBroadcastMultiple.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CSBroadcastMultiple message.
         * @function verify
         * @memberof msg.CSBroadcastMultiple
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CSBroadcastMultiple.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.msgType != null && message.hasOwnProperty("msgType"))
                switch (message.msgType) {
                default:
                    return "msgType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.text != null && message.hasOwnProperty("text"))
                if (!$util.isString(message.text))
                    return "text: string expected";
            if (message.image != null && message.hasOwnProperty("image"))
                if (!$util.isString(message.image))
                    return "image: string expected";
            if (message.video != null && message.hasOwnProperty("video"))
                if (!$util.isString(message.video))
                    return "video: string expected";
            return null;
        };

        /**
         * Creates a CSBroadcastMultiple message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.CSBroadcastMultiple
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.CSBroadcastMultiple} CSBroadcastMultiple
         */
        CSBroadcastMultiple.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.CSBroadcastMultiple)
                return object;
            let message = new $root.msg.CSBroadcastMultiple();
            switch (object.msgType) {
            case "TEXT":
            case 0:
                message.msgType = 0;
                break;
            case "IMAGE":
            case 1:
                message.msgType = 1;
                break;
            case "VIDEO":
            case 2:
                message.msgType = 2;
                break;
            }
            if (object.text != null)
                message.text = String(object.text);
            if (object.image != null)
                message.image = String(object.image);
            if (object.video != null)
                message.video = String(object.video);
            return message;
        };

        /**
         * Creates a plain object from a CSBroadcastMultiple message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.CSBroadcastMultiple
         * @static
         * @param {msg.CSBroadcastMultiple} message CSBroadcastMultiple
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CSBroadcastMultiple.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.msgType = options.enums === String ? "TEXT" : 0;
                object.text = "";
                object.image = "";
                object.video = "";
            }
            if (message.msgType != null && message.hasOwnProperty("msgType"))
                object.msgType = options.enums === String ? $root.msg.MsgType[message.msgType] : message.msgType;
            if (message.text != null && message.hasOwnProperty("text"))
                object.text = message.text;
            if (message.image != null && message.hasOwnProperty("image"))
                object.image = message.image;
            if (message.video != null && message.hasOwnProperty("video"))
                object.video = message.video;
            return object;
        };

        /**
         * Converts this CSBroadcastMultiple to JSON.
         * @function toJSON
         * @memberof msg.CSBroadcastMultiple
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CSBroadcastMultiple.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CSBroadcastMultiple;
    })();

    msg.SCBroadcastMultiple = (function() {

        /**
         * Properties of a SCBroadcastMultiple.
         * @memberof msg
         * @interface ISCBroadcastMultiple
         * @property {msg.MsgType|null} [msgType] SCBroadcastMultiple msgType
         * @property {string|null} [source] SCBroadcastMultiple source
         * @property {string|null} [text] SCBroadcastMultiple text
         * @property {string|null} [image] SCBroadcastMultiple image
         * @property {string|null} [video] SCBroadcastMultiple video
         */

        /**
         * Constructs a new SCBroadcastMultiple.
         * @memberof msg
         * @classdesc Represents a SCBroadcastMultiple.
         * @implements ISCBroadcastMultiple
         * @constructor
         * @param {msg.ISCBroadcastMultiple=} [properties] Properties to set
         */
        function SCBroadcastMultiple(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SCBroadcastMultiple msgType.
         * @member {msg.MsgType} msgType
         * @memberof msg.SCBroadcastMultiple
         * @instance
         */
        SCBroadcastMultiple.prototype.msgType = 0;

        /**
         * SCBroadcastMultiple source.
         * @member {string} source
         * @memberof msg.SCBroadcastMultiple
         * @instance
         */
        SCBroadcastMultiple.prototype.source = "";

        /**
         * SCBroadcastMultiple text.
         * @member {string} text
         * @memberof msg.SCBroadcastMultiple
         * @instance
         */
        SCBroadcastMultiple.prototype.text = "";

        /**
         * SCBroadcastMultiple image.
         * @member {string} image
         * @memberof msg.SCBroadcastMultiple
         * @instance
         */
        SCBroadcastMultiple.prototype.image = "";

        /**
         * SCBroadcastMultiple video.
         * @member {string} video
         * @memberof msg.SCBroadcastMultiple
         * @instance
         */
        SCBroadcastMultiple.prototype.video = "";

        /**
         * Creates a new SCBroadcastMultiple instance using the specified properties.
         * @function create
         * @memberof msg.SCBroadcastMultiple
         * @static
         * @param {msg.ISCBroadcastMultiple=} [properties] Properties to set
         * @returns {msg.SCBroadcastMultiple} SCBroadcastMultiple instance
         */
        SCBroadcastMultiple.create = function create(properties) {
            return new SCBroadcastMultiple(properties);
        };

        /**
         * Encodes the specified SCBroadcastMultiple message. Does not implicitly {@link msg.SCBroadcastMultiple.verify|verify} messages.
         * @function encode
         * @memberof msg.SCBroadcastMultiple
         * @static
         * @param {msg.ISCBroadcastMultiple} message SCBroadcastMultiple message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SCBroadcastMultiple.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msgType != null && Object.hasOwnProperty.call(message, "msgType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.msgType);
            if (message.source != null && Object.hasOwnProperty.call(message, "source"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.source);
            if (message.text != null && Object.hasOwnProperty.call(message, "text"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.text);
            if (message.image != null && Object.hasOwnProperty.call(message, "image"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.image);
            if (message.video != null && Object.hasOwnProperty.call(message, "video"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.video);
            return writer;
        };

        /**
         * Encodes the specified SCBroadcastMultiple message, length delimited. Does not implicitly {@link msg.SCBroadcastMultiple.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.SCBroadcastMultiple
         * @static
         * @param {msg.ISCBroadcastMultiple} message SCBroadcastMultiple message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SCBroadcastMultiple.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SCBroadcastMultiple message from the specified reader or buffer.
         * @function decode
         * @memberof msg.SCBroadcastMultiple
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.SCBroadcastMultiple} SCBroadcastMultiple
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SCBroadcastMultiple.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.SCBroadcastMultiple();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.msgType = reader.int32();
                    break;
                case 2:
                    message.source = reader.string();
                    break;
                case 3:
                    message.text = reader.string();
                    break;
                case 4:
                    message.image = reader.string();
                    break;
                case 5:
                    message.video = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SCBroadcastMultiple message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.SCBroadcastMultiple
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.SCBroadcastMultiple} SCBroadcastMultiple
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SCBroadcastMultiple.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SCBroadcastMultiple message.
         * @function verify
         * @memberof msg.SCBroadcastMultiple
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SCBroadcastMultiple.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.msgType != null && message.hasOwnProperty("msgType"))
                switch (message.msgType) {
                default:
                    return "msgType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.source != null && message.hasOwnProperty("source"))
                if (!$util.isString(message.source))
                    return "source: string expected";
            if (message.text != null && message.hasOwnProperty("text"))
                if (!$util.isString(message.text))
                    return "text: string expected";
            if (message.image != null && message.hasOwnProperty("image"))
                if (!$util.isString(message.image))
                    return "image: string expected";
            if (message.video != null && message.hasOwnProperty("video"))
                if (!$util.isString(message.video))
                    return "video: string expected";
            return null;
        };

        /**
         * Creates a SCBroadcastMultiple message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.SCBroadcastMultiple
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.SCBroadcastMultiple} SCBroadcastMultiple
         */
        SCBroadcastMultiple.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.SCBroadcastMultiple)
                return object;
            let message = new $root.msg.SCBroadcastMultiple();
            switch (object.msgType) {
            case "TEXT":
            case 0:
                message.msgType = 0;
                break;
            case "IMAGE":
            case 1:
                message.msgType = 1;
                break;
            case "VIDEO":
            case 2:
                message.msgType = 2;
                break;
            }
            if (object.source != null)
                message.source = String(object.source);
            if (object.text != null)
                message.text = String(object.text);
            if (object.image != null)
                message.image = String(object.image);
            if (object.video != null)
                message.video = String(object.video);
            return message;
        };

        /**
         * Creates a plain object from a SCBroadcastMultiple message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.SCBroadcastMultiple
         * @static
         * @param {msg.SCBroadcastMultiple} message SCBroadcastMultiple
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SCBroadcastMultiple.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.msgType = options.enums === String ? "TEXT" : 0;
                object.source = "";
                object.text = "";
                object.image = "";
                object.video = "";
            }
            if (message.msgType != null && message.hasOwnProperty("msgType"))
                object.msgType = options.enums === String ? $root.msg.MsgType[message.msgType] : message.msgType;
            if (message.source != null && message.hasOwnProperty("source"))
                object.source = message.source;
            if (message.text != null && message.hasOwnProperty("text"))
                object.text = message.text;
            if (message.image != null && message.hasOwnProperty("image"))
                object.image = message.image;
            if (message.video != null && message.hasOwnProperty("video"))
                object.video = message.video;
            return object;
        };

        /**
         * Converts this SCBroadcastMultiple to JSON.
         * @function toJSON
         * @memberof msg.SCBroadcastMultiple
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SCBroadcastMultiple.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SCBroadcastMultiple;
    })();

    /**
     * MsgType enum.
     * @name msg.MsgType
     * @enum {number}
     * @property {number} TEXT=0 TEXT value
     * @property {number} IMAGE=1 IMAGE value
     * @property {number} VIDEO=2 VIDEO value
     */
    msg.MsgType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "TEXT"] = 0;
        values[valuesById[1] = "IMAGE"] = 1;
        values[valuesById[2] = "VIDEO"] = 2;
        return values;
    })();

    msg.CSUserLogin = (function() {

        /**
         * Properties of a CSUserLogin.
         * @memberof msg
         * @interface ICSUserLogin
         * @property {number|null} [roomID] CSUserLogin roomID
         */

        /**
         * Constructs a new CSUserLogin.
         * @memberof msg
         * @classdesc Represents a CSUserLogin.
         * @implements ICSUserLogin
         * @constructor
         * @param {msg.ICSUserLogin=} [properties] Properties to set
         */
        function CSUserLogin(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CSUserLogin roomID.
         * @member {number} roomID
         * @memberof msg.CSUserLogin
         * @instance
         */
        CSUserLogin.prototype.roomID = 0;

        /**
         * Creates a new CSUserLogin instance using the specified properties.
         * @function create
         * @memberof msg.CSUserLogin
         * @static
         * @param {msg.ICSUserLogin=} [properties] Properties to set
         * @returns {msg.CSUserLogin} CSUserLogin instance
         */
        CSUserLogin.create = function create(properties) {
            return new CSUserLogin(properties);
        };

        /**
         * Encodes the specified CSUserLogin message. Does not implicitly {@link msg.CSUserLogin.verify|verify} messages.
         * @function encode
         * @memberof msg.CSUserLogin
         * @static
         * @param {msg.ICSUserLogin} message CSUserLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSUserLogin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomID != null && Object.hasOwnProperty.call(message, "roomID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roomID);
            return writer;
        };

        /**
         * Encodes the specified CSUserLogin message, length delimited. Does not implicitly {@link msg.CSUserLogin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.CSUserLogin
         * @static
         * @param {msg.ICSUserLogin} message CSUserLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSUserLogin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CSUserLogin message from the specified reader or buffer.
         * @function decode
         * @memberof msg.CSUserLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.CSUserLogin} CSUserLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSUserLogin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.CSUserLogin();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roomID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CSUserLogin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.CSUserLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.CSUserLogin} CSUserLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSUserLogin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CSUserLogin message.
         * @function verify
         * @memberof msg.CSUserLogin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CSUserLogin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomID != null && message.hasOwnProperty("roomID"))
                if (!$util.isInteger(message.roomID))
                    return "roomID: integer expected";
            return null;
        };

        /**
         * Creates a CSUserLogin message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.CSUserLogin
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.CSUserLogin} CSUserLogin
         */
        CSUserLogin.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.CSUserLogin)
                return object;
            let message = new $root.msg.CSUserLogin();
            if (object.roomID != null)
                message.roomID = object.roomID | 0;
            return message;
        };

        /**
         * Creates a plain object from a CSUserLogin message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.CSUserLogin
         * @static
         * @param {msg.CSUserLogin} message CSUserLogin
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CSUserLogin.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.roomID = 0;
            if (message.roomID != null && message.hasOwnProperty("roomID"))
                object.roomID = message.roomID;
            return object;
        };

        /**
         * Converts this CSUserLogin to JSON.
         * @function toJSON
         * @memberof msg.CSUserLogin
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CSUserLogin.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CSUserLogin;
    })();

    msg.SCUserLogin = (function() {

        /**
         * Properties of a SCUserLogin.
         * @memberof msg
         * @interface ISCUserLogin
         * @property {number|null} [roomID] SCUserLogin roomID
         * @property {string|null} [connUUID] SCUserLogin connUUID
         */

        /**
         * Constructs a new SCUserLogin.
         * @memberof msg
         * @classdesc Represents a SCUserLogin.
         * @implements ISCUserLogin
         * @constructor
         * @param {msg.ISCUserLogin=} [properties] Properties to set
         */
        function SCUserLogin(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SCUserLogin roomID.
         * @member {number} roomID
         * @memberof msg.SCUserLogin
         * @instance
         */
        SCUserLogin.prototype.roomID = 0;

        /**
         * SCUserLogin connUUID.
         * @member {string} connUUID
         * @memberof msg.SCUserLogin
         * @instance
         */
        SCUserLogin.prototype.connUUID = "";

        /**
         * Creates a new SCUserLogin instance using the specified properties.
         * @function create
         * @memberof msg.SCUserLogin
         * @static
         * @param {msg.ISCUserLogin=} [properties] Properties to set
         * @returns {msg.SCUserLogin} SCUserLogin instance
         */
        SCUserLogin.create = function create(properties) {
            return new SCUserLogin(properties);
        };

        /**
         * Encodes the specified SCUserLogin message. Does not implicitly {@link msg.SCUserLogin.verify|verify} messages.
         * @function encode
         * @memberof msg.SCUserLogin
         * @static
         * @param {msg.ISCUserLogin} message SCUserLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SCUserLogin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomID != null && Object.hasOwnProperty.call(message, "roomID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roomID);
            if (message.connUUID != null && Object.hasOwnProperty.call(message, "connUUID"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.connUUID);
            return writer;
        };

        /**
         * Encodes the specified SCUserLogin message, length delimited. Does not implicitly {@link msg.SCUserLogin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.SCUserLogin
         * @static
         * @param {msg.ISCUserLogin} message SCUserLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SCUserLogin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SCUserLogin message from the specified reader or buffer.
         * @function decode
         * @memberof msg.SCUserLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.SCUserLogin} SCUserLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SCUserLogin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.SCUserLogin();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roomID = reader.int32();
                    break;
                case 2:
                    message.connUUID = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SCUserLogin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.SCUserLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.SCUserLogin} SCUserLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SCUserLogin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SCUserLogin message.
         * @function verify
         * @memberof msg.SCUserLogin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SCUserLogin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomID != null && message.hasOwnProperty("roomID"))
                if (!$util.isInteger(message.roomID))
                    return "roomID: integer expected";
            if (message.connUUID != null && message.hasOwnProperty("connUUID"))
                if (!$util.isString(message.connUUID))
                    return "connUUID: string expected";
            return null;
        };

        /**
         * Creates a SCUserLogin message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.SCUserLogin
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.SCUserLogin} SCUserLogin
         */
        SCUserLogin.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.SCUserLogin)
                return object;
            let message = new $root.msg.SCUserLogin();
            if (object.roomID != null)
                message.roomID = object.roomID | 0;
            if (object.connUUID != null)
                message.connUUID = String(object.connUUID);
            return message;
        };

        /**
         * Creates a plain object from a SCUserLogin message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.SCUserLogin
         * @static
         * @param {msg.SCUserLogin} message SCUserLogin
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SCUserLogin.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.roomID = 0;
                object.connUUID = "";
            }
            if (message.roomID != null && message.hasOwnProperty("roomID"))
                object.roomID = message.roomID;
            if (message.connUUID != null && message.hasOwnProperty("connUUID"))
                object.connUUID = message.connUUID;
            return object;
        };

        /**
         * Converts this SCUserLogin to JSON.
         * @function toJSON
         * @memberof msg.SCUserLogin
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SCUserLogin.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SCUserLogin;
    })();

    msg.CSPing = (function() {

        /**
         * Properties of a CSPing.
         * @memberof msg
         * @interface ICSPing
         */

        /**
         * Constructs a new CSPing.
         * @memberof msg
         * @classdesc Represents a CSPing.
         * @implements ICSPing
         * @constructor
         * @param {msg.ICSPing=} [properties] Properties to set
         */
        function CSPing(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new CSPing instance using the specified properties.
         * @function create
         * @memberof msg.CSPing
         * @static
         * @param {msg.ICSPing=} [properties] Properties to set
         * @returns {msg.CSPing} CSPing instance
         */
        CSPing.create = function create(properties) {
            return new CSPing(properties);
        };

        /**
         * Encodes the specified CSPing message. Does not implicitly {@link msg.CSPing.verify|verify} messages.
         * @function encode
         * @memberof msg.CSPing
         * @static
         * @param {msg.ICSPing} message CSPing message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSPing.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified CSPing message, length delimited. Does not implicitly {@link msg.CSPing.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.CSPing
         * @static
         * @param {msg.ICSPing} message CSPing message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CSPing.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CSPing message from the specified reader or buffer.
         * @function decode
         * @memberof msg.CSPing
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.CSPing} CSPing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSPing.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.CSPing();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CSPing message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.CSPing
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.CSPing} CSPing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CSPing.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CSPing message.
         * @function verify
         * @memberof msg.CSPing
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CSPing.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a CSPing message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.CSPing
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.CSPing} CSPing
         */
        CSPing.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.CSPing)
                return object;
            return new $root.msg.CSPing();
        };

        /**
         * Creates a plain object from a CSPing message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.CSPing
         * @static
         * @param {msg.CSPing} message CSPing
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CSPing.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this CSPing to JSON.
         * @function toJSON
         * @memberof msg.CSPing
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CSPing.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CSPing;
    })();

    msg.SCPong = (function() {

        /**
         * Properties of a SCPong.
         * @memberof msg
         * @interface ISCPong
         * @property {number|Long|null} [timestamp] SCPong timestamp
         */

        /**
         * Constructs a new SCPong.
         * @memberof msg
         * @classdesc Represents a SCPong.
         * @implements ISCPong
         * @constructor
         * @param {msg.ISCPong=} [properties] Properties to set
         */
        function SCPong(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SCPong timestamp.
         * @member {number|Long} timestamp
         * @memberof msg.SCPong
         * @instance
         */
        SCPong.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new SCPong instance using the specified properties.
         * @function create
         * @memberof msg.SCPong
         * @static
         * @param {msg.ISCPong=} [properties] Properties to set
         * @returns {msg.SCPong} SCPong instance
         */
        SCPong.create = function create(properties) {
            return new SCPong(properties);
        };

        /**
         * Encodes the specified SCPong message. Does not implicitly {@link msg.SCPong.verify|verify} messages.
         * @function encode
         * @memberof msg.SCPong
         * @static
         * @param {msg.ISCPong} message SCPong message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SCPong.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.timestamp);
            return writer;
        };

        /**
         * Encodes the specified SCPong message, length delimited. Does not implicitly {@link msg.SCPong.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.SCPong
         * @static
         * @param {msg.ISCPong} message SCPong message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SCPong.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SCPong message from the specified reader or buffer.
         * @function decode
         * @memberof msg.SCPong
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.SCPong} SCPong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SCPong.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.SCPong();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.timestamp = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SCPong message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.SCPong
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.SCPong} SCPong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SCPong.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SCPong message.
         * @function verify
         * @memberof msg.SCPong
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SCPong.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            return null;
        };

        /**
         * Creates a SCPong message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.SCPong
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.SCPong} SCPong
         */
        SCPong.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.SCPong)
                return object;
            let message = new $root.msg.SCPong();
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a SCPong message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.SCPong
         * @static
         * @param {msg.SCPong} message SCPong
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SCPong.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            return object;
        };

        /**
         * Converts this SCPong to JSON.
         * @function toJSON
         * @memberof msg.SCPong
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SCPong.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SCPong;
    })();

    msg.MsgHeaders = (function() {

        /**
         * Properties of a MsgHeaders.
         * @memberof msg
         * @interface IMsgHeaders
         * @property {string|null} [msgName] MsgHeaders msgName
         */

        /**
         * Constructs a new MsgHeaders.
         * @memberof msg
         * @classdesc Represents a MsgHeaders.
         * @implements IMsgHeaders
         * @constructor
         * @param {msg.IMsgHeaders=} [properties] Properties to set
         */
        function MsgHeaders(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgHeaders msgName.
         * @member {string} msgName
         * @memberof msg.MsgHeaders
         * @instance
         */
        MsgHeaders.prototype.msgName = "";

        /**
         * Creates a new MsgHeaders instance using the specified properties.
         * @function create
         * @memberof msg.MsgHeaders
         * @static
         * @param {msg.IMsgHeaders=} [properties] Properties to set
         * @returns {msg.MsgHeaders} MsgHeaders instance
         */
        MsgHeaders.create = function create(properties) {
            return new MsgHeaders(properties);
        };

        /**
         * Encodes the specified MsgHeaders message. Does not implicitly {@link msg.MsgHeaders.verify|verify} messages.
         * @function encode
         * @memberof msg.MsgHeaders
         * @static
         * @param {msg.IMsgHeaders} message MsgHeaders message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgHeaders.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msgName != null && Object.hasOwnProperty.call(message, "msgName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.msgName);
            return writer;
        };

        /**
         * Encodes the specified MsgHeaders message, length delimited. Does not implicitly {@link msg.MsgHeaders.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.MsgHeaders
         * @static
         * @param {msg.IMsgHeaders} message MsgHeaders message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgHeaders.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgHeaders message from the specified reader or buffer.
         * @function decode
         * @memberof msg.MsgHeaders
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.MsgHeaders} MsgHeaders
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgHeaders.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.MsgHeaders();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.msgName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MsgHeaders message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.MsgHeaders
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.MsgHeaders} MsgHeaders
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgHeaders.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgHeaders message.
         * @function verify
         * @memberof msg.MsgHeaders
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgHeaders.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.msgName != null && message.hasOwnProperty("msgName"))
                if (!$util.isString(message.msgName))
                    return "msgName: string expected";
            return null;
        };

        /**
         * Creates a MsgHeaders message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.MsgHeaders
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.MsgHeaders} MsgHeaders
         */
        MsgHeaders.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.MsgHeaders)
                return object;
            let message = new $root.msg.MsgHeaders();
            if (object.msgName != null)
                message.msgName = String(object.msgName);
            return message;
        };

        /**
         * Creates a plain object from a MsgHeaders message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.MsgHeaders
         * @static
         * @param {msg.MsgHeaders} message MsgHeaders
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgHeaders.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.msgName = "";
            if (message.msgName != null && message.hasOwnProperty("msgName"))
                object.msgName = message.msgName;
            return object;
        };

        /**
         * Converts this MsgHeaders to JSON.
         * @function toJSON
         * @memberof msg.MsgHeaders
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgHeaders.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MsgHeaders;
    })();

    msg.SCResponse = (function() {

        /**
         * Properties of a SCResponse.
         * @memberof msg
         * @interface ISCResponse
         * @property {number|null} [code] SCResponse code
         * @property {string|null} [message] SCResponse message
         * @property {msg.IMsgHeaders|null} [msgHeaders] SCResponse msgHeaders
         * @property {google.protobuf.IAny|null} [data] SCResponse data
         */

        /**
         * Constructs a new SCResponse.
         * @memberof msg
         * @classdesc Represents a SCResponse.
         * @implements ISCResponse
         * @constructor
         * @param {msg.ISCResponse=} [properties] Properties to set
         */
        function SCResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SCResponse code.
         * @member {number} code
         * @memberof msg.SCResponse
         * @instance
         */
        SCResponse.prototype.code = 0;

        /**
         * SCResponse message.
         * @member {string} message
         * @memberof msg.SCResponse
         * @instance
         */
        SCResponse.prototype.message = "";

        /**
         * SCResponse msgHeaders.
         * @member {msg.IMsgHeaders|null|undefined} msgHeaders
         * @memberof msg.SCResponse
         * @instance
         */
        SCResponse.prototype.msgHeaders = null;

        /**
         * SCResponse data.
         * @member {google.protobuf.IAny|null|undefined} data
         * @memberof msg.SCResponse
         * @instance
         */
        SCResponse.prototype.data = null;

        /**
         * Creates a new SCResponse instance using the specified properties.
         * @function create
         * @memberof msg.SCResponse
         * @static
         * @param {msg.ISCResponse=} [properties] Properties to set
         * @returns {msg.SCResponse} SCResponse instance
         */
        SCResponse.create = function create(properties) {
            return new SCResponse(properties);
        };

        /**
         * Encodes the specified SCResponse message. Does not implicitly {@link msg.SCResponse.verify|verify} messages.
         * @function encode
         * @memberof msg.SCResponse
         * @static
         * @param {msg.ISCResponse} message SCResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SCResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
            if (message.msgHeaders != null && Object.hasOwnProperty.call(message, "msgHeaders"))
                $root.msg.MsgHeaders.encode(message.msgHeaders, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                $root.google.protobuf.Any.encode(message.data, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SCResponse message, length delimited. Does not implicitly {@link msg.SCResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.SCResponse
         * @static
         * @param {msg.ISCResponse} message SCResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SCResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SCResponse message from the specified reader or buffer.
         * @function decode
         * @memberof msg.SCResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.SCResponse} SCResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SCResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.SCResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.int32();
                    break;
                case 2:
                    message.message = reader.string();
                    break;
                case 3:
                    message.msgHeaders = $root.msg.MsgHeaders.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.data = $root.google.protobuf.Any.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SCResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.SCResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.SCResponse} SCResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SCResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SCResponse message.
         * @function verify
         * @memberof msg.SCResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SCResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            if (message.msgHeaders != null && message.hasOwnProperty("msgHeaders")) {
                let error = $root.msg.MsgHeaders.verify(message.msgHeaders);
                if (error)
                    return "msgHeaders." + error;
            }
            if (message.data != null && message.hasOwnProperty("data")) {
                let error = $root.google.protobuf.Any.verify(message.data);
                if (error)
                    return "data." + error;
            }
            return null;
        };

        /**
         * Creates a SCResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.SCResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.SCResponse} SCResponse
         */
        SCResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.SCResponse)
                return object;
            let message = new $root.msg.SCResponse();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.message != null)
                message.message = String(object.message);
            if (object.msgHeaders != null) {
                if (typeof object.msgHeaders !== "object")
                    throw TypeError(".msg.SCResponse.msgHeaders: object expected");
                message.msgHeaders = $root.msg.MsgHeaders.fromObject(object.msgHeaders);
            }
            if (object.data != null) {
                if (typeof object.data !== "object")
                    throw TypeError(".msg.SCResponse.data: object expected");
                message.data = $root.google.protobuf.Any.fromObject(object.data);
            }
            return message;
        };

        /**
         * Creates a plain object from a SCResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.SCResponse
         * @static
         * @param {msg.SCResponse} message SCResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SCResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.code = 0;
                object.message = "";
                object.msgHeaders = null;
                object.data = null;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.msgHeaders != null && message.hasOwnProperty("msgHeaders"))
                object.msgHeaders = $root.msg.MsgHeaders.toObject(message.msgHeaders, options);
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = $root.google.protobuf.Any.toObject(message.data, options);
            return object;
        };

        /**
         * Converts this SCResponse to JSON.
         * @function toJSON
         * @memberof msg.SCResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SCResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SCResponse;
    })();

    return msg;
})();

export const google = $root.google = (() => {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    const google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        const protobuf = {};

        protobuf.Any = (function() {

            /**
             * Properties of an Any.
             * @memberof google.protobuf
             * @interface IAny
             * @property {string|null} [type_url] Any type_url
             * @property {Uint8Array|null} [value] Any value
             */

            /**
             * Constructs a new Any.
             * @memberof google.protobuf
             * @classdesc Represents an Any.
             * @implements IAny
             * @constructor
             * @param {google.protobuf.IAny=} [properties] Properties to set
             */
            function Any(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Any type_url.
             * @member {string} type_url
             * @memberof google.protobuf.Any
             * @instance
             */
            Any.prototype.type_url = "";

            /**
             * Any value.
             * @member {Uint8Array} value
             * @memberof google.protobuf.Any
             * @instance
             */
            Any.prototype.value = $util.newBuffer([]);

            /**
             * Creates a new Any instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny=} [properties] Properties to set
             * @returns {google.protobuf.Any} Any instance
             */
            Any.create = function create(properties) {
                return new Any(properties);
            };

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny} message Any message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Any.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type_url != null && Object.hasOwnProperty.call(message, "type_url"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.type_url);
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.value);
                return writer;
            };

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny} message Any message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Any.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Any
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Any} Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Any.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Any();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.type_url = reader.string();
                        break;
                    case 2:
                        message.value = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Any
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Any} Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Any.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Any message.
             * @function verify
             * @memberof google.protobuf.Any
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Any.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    if (!$util.isString(message.type_url))
                        return "type_url: string expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                        return "value: buffer expected";
                return null;
            };

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Any
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Any} Any
             */
            Any.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Any)
                    return object;
                let message = new $root.google.protobuf.Any();
                if (object.type_url != null)
                    message.type_url = String(object.type_url);
                if (object.value != null)
                    if (typeof object.value === "string")
                        $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                    else if (object.value.length)
                        message.value = object.value;
                return message;
            };

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.Any} message Any
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Any.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.type_url = "";
                    if (options.bytes === String)
                        object.value = "";
                    else {
                        object.value = [];
                        if (options.bytes !== Array)
                            object.value = $util.newBuffer(object.value);
                    }
                }
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    object.type_url = message.type_url;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
                return object;
            };

            /**
             * Converts this Any to JSON.
             * @function toJSON
             * @memberof google.protobuf.Any
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Any.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Any;
        })();

        return protobuf;
    })();

    return google;
})();

export { $root as default };
