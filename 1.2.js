window = global
const CryptoJS = require('crypto-js');
function n(e, r) {
    var n = CryptoJS.enc.Utf8.parse(r)
        , o = CryptoJS.enc.Utf8.parse("0102030405060708")
        , i = CryptoJS.enc.Utf8.parse(e);
    return CryptoJS.AES.encrypt(i, n, {
        iv: o,
        mode: CryptoJS.mode.CBC
    }).toString()
}
var ltl;
var Gr, Hr = {}, zr = {}, Kr = {};
var Yr, $r, Xr = {};
function Jr() {
    if (Yr) return Xr;

    function e(e) {
        j = new Array(e);
        for (var r = 0; r < j.length; r++) j[r] = 0;
        k = new t, (T = new t).digits[0] = 1
    }

    function t(e) {
        this.digits = "boolean" == typeof e && 1 == e ? null : j.slice(0), this.isNeg = !1
    }

    function r(e) {
        var r = new t(!0);
        return r.digits = e.digits.slice(0), r.isNeg = e.isNeg, r
    }

    function n(e) {
        var t, r = "";
        for (t = e.length - 1; t > -1; --t) r += e.charAt(t);
        return r
    }

    function o(e, r) {
        var o, i, a = new t;
        for (a.digits[0] = r, o = O(e, a), i = N[o[1].digits[0]]; 1 == x(o[0], k);) o = O(o[0], a), digit = o[1].digits[0], i += N[o[1].digits[0]];
        return (e.isNeg ? "-" : "") + n(i)
    }

    function i(e) {
        var t, r = "";
        for (t = 0; 4 > t; ++t) r += M[15 & e], e >>>= 4;
        return n(r)
    }

    function a(e) {
        var t, r = "";
        for (p(e), t = p(e); t > -1; --t) r += i(e.digits[t]);
        return r
    }

    function u(e) {
        return e >= 48 && 57 >= e ? e - 48 : e >= 65 && 90 >= e ? 10 + e - 65 : e >= 97 && 122 >= e ? 10 + e - 97 : 0
    }

    function c(e) {
        var t, r = 0, n = Math.min(e.length, 4);
        for (t = 0; n > t; ++t) r <<= 4, r |= u(e.charCodeAt(t));
        return r
    }

    function s(e) {
        var r, n, o = new t;
        for (r = e.length, n = 0; r > 0; r -= 4, ++n) o.digits[n] = c(e.substr(Math.max(r - 4, 0), Math.min(r, 4)));
        return o
    }

    function f(e, r) {
        var n, o, i, a;
        if (e.isNeg != r.isNeg) r.isNeg = !r.isNeg, n = l(e, r), r.isNeg = !r.isNeg; else {
            for (n = new t, o = 0, a = 0; a < e.digits.length; ++a) i = e.digits[a] + r.digits[a] + o, n.digits[a] = 65535 & i, o = Number(i >= C);
            n.isNeg = e.isNeg
        }
        return n
    }

    function l(e, r) {
        var n, o, i, a;
        if (e.isNeg != r.isNeg) r.isNeg = !r.isNeg, n = f(e, r), r.isNeg = !r.isNeg; else {
            for (n = new t, i = 0, a = 0; a < e.digits.length; ++a) o = e.digits[a] - r.digits[a] + i, n.digits[a] = 65535 & o, n.digits[a] < 0 && (n.digits[a] += C), i = 0 - Number(0 > o);
            if (-1 == i) {
                for (i = 0, a = 0; a < e.digits.length; ++a) o = 0 - n.digits[a] + i, n.digits[a] = 65535 & o, n.digits[a] < 0 && (n.digits[a] += C), i = 0 - Number(0 > o);
                n.isNeg = !e.isNeg
            } else n.isNeg = e.isNeg
        }
        return n
    }

    function p(e) {
        for (var t = e.digits.length - 1; t > 0 && 0 == e.digits[t];) --t;
        return t
    }

    function d(e) {
        var t, r = p(e), n = e.digits[r], o = (r + 1) * D;
        for (t = o; t > o - D && 0 == (32768 & n); --t) n <<= 1;
        return t
    }

    function y(e, r) {
        var n, o, i, a, u, c = new t, s = p(e), f = p(r);
        for (u = 0; f >= u; ++u) {
            for (n = 0, i = u, a = 0; s >= a; ++a, ++i) o = c.digits[i] + e.digits[a] * r.digits[u] + n, c.digits[i] = o & U, n = o >>> L;
            c.digits[u + s + 1] = n
        }
        return c.isNeg = e.isNeg != r.isNeg, c
    }

    function h(e, r) {
        var n, o, i, a, u;
        for (u = new t, n = p(e), o = 0, a = 0; n >= a; ++a) i = u.digits[a] + e.digits[a] * r + o, u.digits[a] = i & U, o = i >>> L;
        return u.digits[1 + n] = o, u
    }

    function v(e, t, r, n, o) {
        var i, a, u = Math.min(t + o, e.length);
        for (i = t, a = n; u > i; ++i, ++a) r[a] = e[i]
    }

    function g(e, r) {
        var n, o, i, a, u = Math.floor(r / D), c = new t;
        for (v(e.digits, 0, c.digits, u, c.digits.length - u), o = D - (n = r % D), a = (i = c.digits.length - 1) - 1; i > 0; --i, --a) c.digits[i] = c.digits[i] << n & U | (c.digits[a] & I[n]) >>> o;
        return c.digits[0] = c.digits[i] << n & U, c.isNeg = e.isNeg, c
    }

    function b(e, r) {
        var n, o, i, a, u = Math.floor(r / D), c = new t;
        for (v(e.digits, u, c.digits, 0, e.digits.length - u), o = D - (n = r % D), a = (i = 0) + 1; i < c.digits.length - 1; ++i, ++a) c.digits[i] = c.digits[i] >>> n | (c.digits[a] & R[n]) << o;
        return c.digits[c.digits.length - 1] >>>= n, c.isNeg = e.isNeg, c
    }

    function m(e, r) {
        var n = new t;
        return v(e.digits, 0, n.digits, r, n.digits.length - r), n
    }

    function w(e, r) {
        var n = new t;
        return v(e.digits, r, n.digits, 0, n.digits.length - r), n
    }

    function E(e, r) {
        var n = new t;
        return v(e.digits, 0, n.digits, 0, r), n
    }

    function x(e, t) {
        if (e.isNeg != t.isNeg) return 1 - 2 * Number(e.isNeg);
        for (var r = e.digits.length - 1; r >= 0; --r) if (e.digits[r] != t.digits[r]) return e.isNeg ? 1 - 2 * Number(e.digits[r] > t.digits[r]) : 1 - 2 * Number(e.digits[r] < t.digits[r]);
        return 0
    }

    function O(e, n) {
        var o, i, a, u, c, s, y, v, w, E, O, _, S, P, A = d(e), j = d(n), k = n.isNeg;
        if (j > A) return e.isNeg ? ((o = r(T)).isNeg = !n.isNeg, e.isNeg = !1, n.isNeg = !1, i = l(n, e), e.isNeg = !0, n.isNeg = k) : (o = new t, i = r(e)), new Array(o, i);
        for (o = new t, i = e, a = Math.ceil(j / D) - 1, u = 0; n.digits[a] < B;) n = g(n, 1), ++u, ++j, a = Math.ceil(j / D) - 1;
        for (i = g(i, u), A += u, s = m(n, (c = Math.ceil(A / D) - 1) - a); -1 != x(i, s);) ++o.digits[c - a], i = l(i, s);
        for (y = c; y > a; --y) {
            for (v = y >= i.digits.length ? 0 : i.digits[y], w = y - 1 >= i.digits.length ? 0 : i.digits[y - 1], E = y - 2 >= i.digits.length ? 0 : i.digits[y - 2], O = a >= n.digits.length ? 0 : n.digits[a], _ = a - 1 >= n.digits.length ? 0 : n.digits[a - 1], o.digits[y - a - 1] = v == O ? U : Math.floor((v * C + w) / O), S = o.digits[y - a - 1] * (O * C + _), P = v * F + (w * C + E); S > P;) --o.digits[y - a - 1], S = o.digits[y - a - 1] * (O * C | _), P = v * C * C + (w * C + E);
            (i = l(i, h(s = m(n, y - a - 1), o.digits[y - a - 1]))).isNeg && (i = f(i, s), --o.digits[y - a - 1])
        }
        return i = b(i, u), o.isNeg = e.isNeg != k, e.isNeg && (o = k ? f(o, T) : l(o, T), i = l(n = b(n, u), i)), 0 == i.digits[0] && 0 == p(i) && (i.isNeg = !1), new Array(o, i)
    }

    function _(e) {
        this.modulus = r(e), this.k = p(this.modulus) + 1;
        var n = new t;
        n.digits[2 * this.k] = 1, this.mu = function (e, t) {
            return O(e, t)[0]
        }(n, this.modulus), this.bkplus1 = new t, this.bkplus1.digits[this.k + 1] = 1, this.modulo = S, this.multiplyMod = P, this.powMod = A
    }

    function S(e) {
        var t, r = w(e, this.k - 1), n = w(y(r, this.mu), this.k + 1),
            o = l(E(e, this.k + 1), E(y(n, this.modulus), this.k + 1));
        for (o.isNeg && (o = f(o, this.bkplus1)), t = x(o, this.modulus) >= 0; t;) t = x(o = l(o, this.modulus), this.modulus) >= 0;
        return o
    }

    function P(e, t) {
        var r = y(e, t);
        return this.modulo(r)
    }

    function A(e, r) {
        var n, o, i = new t;
        for (i.digits[0] = 1, n = e, o = r; 0 != (1 & o.digits[0]) && (i = this.multiplyMod(i, n)), 0 != (o = b(o, 1)).digits[0] || 0 != p(o);) n = this.multiplyMod(n, n);
        return i
    }

    Yr = 1, Object.defineProperty(Xr, "__esModule", {
        value: !0
    }), Xr.default = void 0;
    var j, k, T, N, M, I, R, L = 16, D = L, C = 65536, B = C >>> 1, F = C * C, U = C - 1;
    e(20), function (e) {
        var r, n = new t;
        for (n.isNeg = 0 > e, e = Math.abs(e), r = 0; e > 0;) n.digits[r++] = e & U, e >>= L
    }(1e15), N = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"), M = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"), I = new Array(0, 32768, 49152, 57344, 61440, 63488, 64512, 65024, 65280, 65408, 65472, 65504, 65520, 65528, 65532, 65534, 65535), R = new Array(0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535);
    var W = {
        RSAKeyPair: function (e, t, r) {
            this.e = s(e), this.d = s(t), this.m = s(r), this.chunkSize = 2 * p(this.m), this.radix = 16, this.barrett = new _(this.m)
            ltl = {
                "e": this.e,
                "d": this.d,
                "m": this.m,
                "chunkSize": 126,
                "radix": 16,
                "barrett": this.barrett,

            };


        }, setMaxDigits: e, encryptedString: function (e, r) {
            for (var n, i, u, c, s, f, l = new Array, p = r.length, d = 0; p > d;) l[d] = r.charCodeAt(d), d++;
            for (; 0 != l.length % e.chunkSize;) l[d++] = 0;
            for (n = l.length, i = "", d = 0; n > d; d += e.chunkSize) {
                for (s = new t, u = 0, c = d; c < d + e.chunkSize; ++u) s.digits[u] = l[c++], s.digits[u] += l[c++] << 8;
                f = e.barrett.powMod(s, e.e), i += (16 == e.radix ? a(f) : o(f, e.radix)) + " "
            }
            return i.substring(0, i.length - 1)
        }
    };
    return Xr.default = W, Xr
}
var r = Jr().default.setMaxDigits(131);
var o = Jr().default.RSAKeyPair("010001", "", "00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7b725152b3ab17a876aea8a5aa76d2e417629ec4ee341f56135fccf695280104e0312ecbda92557c93870114af6c9d05c4f7f0c3685b7a46bee255932575cce10b424d813cfe4875d3e82047b97ddef52741d546b8e289dc6935b3ece0462db0a22b8e7");
function oo(e, t, n) {
    var o;
    return Jr().default.setMaxDigits(131), Jr().default.encryptedString(ltl, e)
}
function asrsea(d) {
    dd='{"ids":"['+d+']","level":"standard","encodeType":"aac","csrf_token":"129481baa4bdeba1c8fd391422ac9dd5"}'
    e = "010001"
    f = "00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7b725152b3ab17a876aea8a5aa76d2e417629ec4ee341f56135fccf695280104e0312ecbda92557c93870114af6c9d05c4f7f0c3685b7a46bee255932575cce10b424d813cfe4875d3e82047b97ddef52741d546b8e289dc6935b3ece0462db0a22b8e7"
    g = "0CoJUm6Qyw8W8jud"
    function a(a) {
        var d, e, b = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", c = "";
        for (d = 0; a > d; d += 1)
            e = Math.random() * b.length,
                e = Math.floor(e),
                c += b.charAt(e);
        return c
    }
    i = a(16);
    console.log({
        encText: n(n(dd, g), i),
        result: oo(i, e, f)
    })
    return {
        res1: n(n(dd, g), i),
        result: oo(i, e, f)
    }
}
