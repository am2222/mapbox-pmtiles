import Le from "mapbox-gl";
var _ = Math.pow, p = (t, e, r) => new Promise((n, i) => {
  var o = (h) => {
    try {
      c(r.next(h));
    } catch (l) {
      i(l);
    }
  }, s = (h) => {
    try {
      c(r.throw(h));
    } catch (l) {
      i(l);
    }
  }, c = (h) => h.done ? n(h.value) : Promise.resolve(h.value).then(o, s);
  c((r = r.apply(t, e)).next());
}), w = Uint8Array, S = Uint16Array, $e = Int32Array, Te = new w([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]), Ue = new w([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]), ke = new w([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), Ee = function(t, e) {
  for (var r = new S(31), n = 0; n < 31; ++n)
    r[n] = e += 1 << t[n - 1];
  for (var i = new $e(r[30]), n = 1; n < 30; ++n)
    for (var o = r[n]; o < r[n + 1]; ++o)
      i[o] = o - r[n] << 5 | n;
  return { b: r, r: i };
}, be = Ee(Te, 2), Me = be.b, qe = be.r;
Me[28] = 258, qe[258] = 28;
var Ke = Ee(Ue, 0), We = Ke.b, te = new S(32768);
for (d = 0; d < 32768; ++d)
  E = (d & 43690) >> 1 | (d & 21845) << 1, E = (E & 52428) >> 2 | (E & 13107) << 2, E = (E & 61680) >> 4 | (E & 3855) << 4, te[d] = ((E & 65280) >> 8 | (E & 255) << 8) >> 1;
var E, d, R = function(t, e, r) {
  for (var n = t.length, i = 0, o = new S(e); i < n; ++i)
    t[i] && ++o[t[i] - 1];
  var s = new S(e);
  for (i = 1; i < e; ++i)
    s[i] = s[i - 1] + o[i - 1] << 1;
  var c;
  if (r) {
    c = new S(1 << e);
    var h = 15 - e;
    for (i = 0; i < n; ++i)
      if (t[i])
        for (var l = i << 4 | t[i], a = e - t[i], u = s[t[i] - 1]++ << a, f = u | (1 << a) - 1; u <= f; ++u)
          c[te[u] >> h] = l;
  } else
    for (c = new S(n), i = 0; i < n; ++i)
      t[i] && (c[i] = te[s[t[i] - 1]++] >> 15 - t[i]);
  return c;
}, O = new w(288);
for (d = 0; d < 144; ++d)
  O[d] = 8;
var d;
for (d = 144; d < 256; ++d)
  O[d] = 9;
var d;
for (d = 256; d < 280; ++d)
  O[d] = 7;
var d;
for (d = 280; d < 288; ++d)
  O[d] = 8;
var d, ze = new w(32);
for (d = 0; d < 32; ++d)
  ze[d] = 5;
var d, Ye = /* @__PURE__ */ R(O, 9, 1), je = /* @__PURE__ */ R(ze, 5, 1), G = function(t) {
  for (var e = t[0], r = 1; r < t.length; ++r)
    t[r] > e && (e = t[r]);
  return e;
}, T = function(t, e, r) {
  var n = e / 8 | 0;
  return (t[n] | t[n + 1] << 8) >> (e & 7) & r;
}, Q = function(t, e) {
  var r = e / 8 | 0;
  return (t[r] | t[r + 1] << 8 | t[r + 2] << 16) >> (e & 7);
}, Je = function(t) {
  return (t + 7) / 8 | 0;
}, Fe = function(t, e, r) {
  (e == null || e < 0) && (e = 0), (r == null || r > t.length) && (r = t.length);
  var n = new w(r - e);
  return n.set(t.subarray(e, r)), n;
}, Ne = [
  "unexpected EOF",
  "invalid block type",
  "invalid length/literal",
  "invalid distance",
  "stream finished",
  "no stream handler",
  ,
  "no callback",
  "invalid UTF-8 data",
  "extra field too long",
  "date not in range 1980-2099",
  "filename too long",
  "stream finishing",
  "invalid zip data"
  // determined by unknown compression method
], y = function(t, e, r) {
  var n = new Error(e || Ne[t]);
  if (n.code = t, Error.captureStackTrace && Error.captureStackTrace(n, y), !r)
    throw n;
  return n;
}, ie = function(t, e, r, n) {
  var i = t.length, o = n ? n.length : 0;
  if (!i || e.f && !e.l)
    return r || new w(0);
  var s = !r || e.i != 2, c = e.i;
  r || (r = new w(i * 3));
  var h = function(me) {
    var ge = r.length;
    if (me > ge) {
      var ve = new w(Math.max(ge * 2, me));
      ve.set(r), r = ve;
    }
  }, l = e.f || 0, a = e.p || 0, u = e.b || 0, f = e.l, m = e.d, g = e.m, x = e.n, M = i * 8;
  do {
    if (!f) {
      l = T(t, a, 1);
      var P = T(t, a + 1, 3);
      if (a += 3, P)
        if (P == 1)
          f = Ye, m = je, g = 9, x = 5;
        else if (P == 2) {
          var Y = T(t, a, 31) + 257, ae = T(t, a + 10, 15) + 4, ce = Y + T(t, a + 5, 31) + 1;
          a += 14;
          for (var B = new w(ce), j = new w(19), D = 0; D < ae; ++D)
            j[ke[D]] = T(t, a + D * 3, 7);
          a += ae * 3;
          for (var le = G(j), Ie = (1 << le) - 1, Re = R(j, le, 1), D = 0; D < ce; ) {
            var ue = Re[T(t, a, Ie)];
            a += ue & 15;
            var v = ue >> 4;
            if (v < 16)
              B[D++] = v;
            else {
              var z = 0, H = 0;
              for (v == 16 ? (H = 3 + T(t, a, 3), a += 2, z = B[D - 1]) : v == 17 ? (H = 3 + T(t, a, 7), a += 3) : v == 18 && (H = 11 + T(t, a, 127), a += 7); H--; )
                B[D++] = z;
            }
          }
          var he = B.subarray(0, Y), L = B.subarray(Y);
          g = G(he), x = G(L), f = R(he, g, 1), m = R(L, x, 1);
        } else
          y(1);
      else {
        var v = Je(a) + 4, K = t[v - 4] | t[v - 3] << 8, W = v + K;
        if (W > i) {
          c && y(0);
          break;
        }
        s && h(u + K), r.set(t.subarray(v, W), u), e.b = u += K, e.p = a = W * 8, e.f = l;
        continue;
      }
      if (a > M) {
        c && y(0);
        break;
      }
    }
    s && h(u + 131072);
    for (var Oe = (1 << g) - 1, Pe = (1 << x) - 1, J = a; ; J = a) {
      var z = f[Q(t, a) & Oe], C = z >> 4;
      if (a += z & 15, a > M) {
        c && y(0);
        break;
      }
      if (z || y(2), C < 256)
        r[u++] = C;
      else if (C == 256) {
        J = a, f = null;
        break;
      } else {
        var fe = C - 254;
        if (C > 264) {
          var D = C - 257, V = Te[D];
          fe = T(t, a, (1 << V) - 1) + Me[D], a += V;
        }
        var F = m[Q(t, a) & Pe], N = F >> 4;
        F || y(3), a += F & 15;
        var L = We[N];
        if (N > 3) {
          var V = Ue[N];
          L += Q(t, a) & (1 << V) - 1, a += V;
        }
        if (a > M) {
          c && y(0);
          break;
        }
        s && h(u + 131072);
        var X = u + fe;
        if (u < L) {
          var de = o - L, He = Math.min(L, X);
          for (de + u < 0 && y(3); u < He; ++u)
            r[u] = n[de + u];
        }
        for (; u < X; u += 4)
          r[u] = r[u - L], r[u + 1] = r[u + 1 - L], r[u + 2] = r[u + 2 - L], r[u + 3] = r[u + 3 - L];
        u = X;
      }
    }
    e.l = f, e.p = J, e.b = u, e.f = l, f && (l = 1, e.m = g, e.d = m, e.n = x);
  } while (!l);
  return u == r.length ? r : Fe(r, 0, u);
}, Xe = /* @__PURE__ */ new w(0), Ge = function(t) {
  (t[0] != 31 || t[1] != 139 || t[2] != 8) && y(6, "invalid gzip data");
  var e = t[3], r = 10;
  e & 4 && (r += (t[10] | t[11] << 8) + 2);
  for (var n = (e >> 3 & 1) + (e >> 4 & 1); n > 0; n -= !t[r++])
    ;
  return r + (e & 2);
}, Qe = function(t) {
  var e = t.length;
  return (t[e - 4] | t[e - 3] << 8 | t[e - 2] << 16 | t[e - 1] << 24) >>> 0;
}, et = function(t, e) {
  return ((t[0] & 15) != 8 || t[0] >> 4 > 7 || (t[0] << 8 | t[1]) % 31) && y(6, "invalid zlib data"), (t[1] >> 5 & 1) == +!e && y(6, "invalid zlib data: " + (t[1] & 32 ? "need" : "unexpected") + " dictionary"), (t[1] >> 3 & 4) + 2;
};
function tt(t, e) {
  return ie(t, { i: 2 }, e && e.out, e && e.dictionary);
}
function rt(t, e) {
  var r = Ge(t);
  return r + 8 > t.length && y(6, "invalid gzip data"), ie(t.subarray(r, -8), { i: 2 }, e && e.out || new w(Qe(t)), e && e.dictionary);
}
function nt(t, e) {
  return ie(t.subarray(et(t, e && e.dictionary), -4), { i: 2 }, e && e.out, e && e.dictionary);
}
function re(t, e) {
  return t[0] == 31 && t[1] == 139 && t[2] == 8 ? rt(t, e) : (t[0] & 15) != 8 || t[0] >> 4 > 7 || (t[0] << 8 | t[1]) % 31 ? tt(t, e) : nt(t, e);
}
var it = typeof TextDecoder < "u" && /* @__PURE__ */ new TextDecoder(), ot = 0;
try {
  it.decode(Xe, { stream: !0 }), ot = 1;
} catch {
}
var Ce = (t, e) => t * _(2, e), Z = (t, e) => Math.floor(t / _(2, e)), k = (t, e) => Ce(t.getUint16(e + 1, !0), 8) + t.getUint8(e), Ae = (t, e) => Ce(t.getUint32(e + 2, !0), 16) + t.getUint16(e, !0), st = (t, e, r, n, i) => {
  if (t !== n.getUint8(i))
    return t - n.getUint8(i);
  const o = k(n, i + 1);
  if (e !== o)
    return e - o;
  const s = k(n, i + 4);
  return r !== s ? r - s : 0;
}, at = (t, e, r, n) => {
  const i = Se(t, e | 128, r, n);
  return i ? {
    z: e,
    x: r,
    y: n,
    offset: i[0],
    length: i[1],
    isDir: !0
  } : null;
}, pe = (t, e, r, n) => {
  const i = Se(t, e, r, n);
  return i ? {
    z: e,
    x: r,
    y: n,
    offset: i[0],
    length: i[1],
    isDir: !1
  } : null;
}, Se = (t, e, r, n) => {
  let i = 0, o = t.byteLength / 17 - 1;
  for (; i <= o; ) {
    const s = o + i >> 1, c = st(e, r, n, t, s * 17);
    if (c > 0)
      i = s + 1;
    else if (c < 0)
      o = s - 1;
    else
      return [Ae(t, s * 17 + 7), t.getUint32(s * 17 + 13, !0)];
  }
  return null;
}, ct = (t, e) => t.isDir && !e.isDir ? 1 : !t.isDir && e.isDir ? -1 : t.z !== e.z ? t.z - e.z : t.x !== e.x ? t.x - e.x : t.y - e.y, _e = (t, e) => {
  const r = t.getUint8(e * 17);
  return {
    z: r & 127,
    x: k(t, e * 17 + 1),
    y: k(t, e * 17 + 4),
    offset: Ae(t, e * 17 + 7),
    length: t.getUint32(e * 17 + 13, !0),
    isDir: r >> 7 === 1
  };
}, ye = (t) => {
  const e = [], r = new DataView(t);
  for (let n = 0; n < r.byteLength / 17; n++)
    e.push(_e(r, n));
  return lt(e);
}, lt = (t) => {
  t.sort(ct);
  const e = new ArrayBuffer(17 * t.length), r = new Uint8Array(e);
  for (let n = 0; n < t.length; n++) {
    const i = t[n];
    let o = i.z;
    i.isDir && (o = o | 128), r[n * 17] = o, r[n * 17 + 1] = i.x & 255, r[n * 17 + 2] = i.x >> 8 & 255, r[n * 17 + 3] = i.x >> 16 & 255, r[n * 17 + 4] = i.y & 255, r[n * 17 + 5] = i.y >> 8 & 255, r[n * 17 + 6] = i.y >> 16 & 255, r[n * 17 + 7] = i.offset & 255, r[n * 17 + 8] = Z(i.offset, 8) & 255, r[n * 17 + 9] = Z(i.offset, 16) & 255, r[n * 17 + 10] = Z(i.offset, 24) & 255, r[n * 17 + 11] = Z(i.offset, 32) & 255, r[n * 17 + 12] = Z(i.offset, 48) & 255, r[n * 17 + 13] = i.length & 255, r[n * 17 + 14] = i.length >> 8 & 255, r[n * 17 + 15] = i.length >> 16 & 255, r[n * 17 + 16] = i.length >> 24 & 255;
  }
  return e;
}, ut = (t, e) => {
  if (t.byteLength < 17)
    return null;
  const r = t.byteLength / 17, n = _e(t, r - 1);
  if (n.isDir) {
    const i = n.z, o = e.z - i, s = Math.trunc(e.x / (1 << o)), c = Math.trunc(e.y / (1 << o));
    return { z: i, x: s, y: c };
  }
  return null;
};
function ht(t) {
  return p(this, null, function* () {
    const e = yield t.getBytes(0, 512e3), r = new DataView(e.data), n = r.getUint32(4, !0), i = r.getUint16(8, !0), o = new TextDecoder("utf-8"), s = JSON.parse(
      o.decode(new DataView(e.data, 10, n))
    );
    let c = 0;
    s.compression === "gzip" && (c = 2);
    let h = 0;
    "minzoom" in s && (h = +s.minzoom);
    let l = 0;
    "maxzoom" in s && (l = +s.maxzoom);
    let a = 0, u = 0, f = 0, m = -180, g = -85, x = 180, M = 85;
    if (s.bounds) {
      const v = s.bounds.split(",");
      m = +v[0], g = +v[1], x = +v[2], M = +v[3];
    }
    if (s.center) {
      const v = s.center.split(",");
      a = +v[0], u = +v[1], f = +v[2];
    }
    return {
      specVersion: r.getUint16(2, !0),
      rootDirectoryOffset: 10 + n,
      rootDirectoryLength: i * 17,
      jsonMetadataOffset: 10,
      jsonMetadataLength: n,
      leafDirectoryOffset: 0,
      leafDirectoryLength: void 0,
      tileDataOffset: 0,
      tileDataLength: void 0,
      numAddressedTiles: 0,
      numTileEntries: 0,
      numTileContents: 0,
      clustered: !1,
      internalCompression: 1,
      tileCompression: c,
      tileType: 1,
      minZoom: h,
      maxZoom: l,
      minLon: m,
      minLat: g,
      maxLon: x,
      maxLat: M,
      centerZoom: f,
      centerLon: a,
      centerLat: u,
      etag: e.etag
    };
  });
}
function ft(t, e, r, n, i, o, s) {
  return p(this, null, function* () {
    let c = yield r.getArrayBuffer(
      e,
      t.rootDirectoryOffset,
      t.rootDirectoryLength,
      t
    );
    t.specVersion === 1 && (c = ye(c));
    const h = pe(new DataView(c), n, i, o);
    if (h) {
      let u = (yield e.getBytes(h.offset, h.length, s)).data;
      const f = new DataView(u);
      return f.getUint8(0) === 31 && f.getUint8(1) === 139 && (u = re(new Uint8Array(u))), {
        data: u
      };
    }
    const l = ut(new DataView(c), { z: n, x: i, y: o });
    if (l) {
      const a = at(
        new DataView(c),
        l.z,
        l.x,
        l.y
      );
      if (a) {
        let u = yield r.getArrayBuffer(
          e,
          a.offset,
          a.length,
          t
        );
        t.specVersion === 1 && (u = ye(u));
        const f = pe(new DataView(u), n, i, o);
        if (f) {
          let g = (yield e.getBytes(
            f.offset,
            f.length,
            s
          )).data;
          const x = new DataView(g);
          return x.getUint8(0) === 31 && x.getUint8(1) === 139 && (g = re(new Uint8Array(g))), {
            data: g
          };
        }
      }
    }
  });
}
var Be = {
  getHeader: ht,
  getZxy: ft
}, dt = (t) => (e, r) => {
  if (r instanceof AbortController)
    return t(e, r);
  const n = new AbortController();
  return t(e, n).then(
    (i) => r(
      void 0,
      i.data,
      i.cacheControl || "",
      i.expires || ""
    ),
    (i) => r(i)
  ).catch((i) => r(i)), { cancel: () => n.abort() };
}, mt = class {
  constructor() {
    this.tilev4 = (t, e) => p(this, null, function* () {
      if (t.type === "json") {
        const u = t.url.substr(10);
        let f = this.tiles.get(u);
        f || (f = new q(u), this.tiles.set(u, f));
        const m = yield f.getHeader();
        return {
          data: {
            tiles: [`${t.url}/{z}/{x}/{y}`],
            minzoom: m.minZoom,
            maxzoom: m.maxZoom,
            bounds: [m.minLon, m.minLat, m.maxLon, m.maxLat]
          }
        };
      }
      const r = new RegExp(/pmtiles:\/\/(.+)\/(\d+)\/(\d+)\/(\d+)/), n = t.url.match(r);
      if (!n)
        throw new Error("Invalid PMTiles protocol URL");
      const i = n[1];
      let o = this.tiles.get(i);
      o || (o = new q(i), this.tiles.set(i, o));
      const s = n[2], c = n[3], h = n[4], l = yield o.getHeader(), a = yield o == null ? void 0 : o.getZxy(+s, +c, +h, e.signal);
      return a ? {
        data: new Uint8Array(a.data),
        cacheControl: a.cacheControl,
        expires: a.expires
      } : l.tileType === 1 ? { data: new Uint8Array() } : { data: null };
    }), this.tile = dt(this.tilev4), this.tiles = /* @__PURE__ */ new Map();
  }
  add(t) {
    this.tiles.set(t.source.getKey(), t);
  }
  get(t) {
    return this.tiles.get(t);
  }
};
function A(t, e) {
  return (e >>> 0) * 4294967296 + (t >>> 0);
}
function gt(t, e) {
  const r = e.buf;
  let n = r[e.pos++], i = (n & 112) >> 4;
  if (n < 128 || (n = r[e.pos++], i |= (n & 127) << 3, n < 128) || (n = r[e.pos++], i |= (n & 127) << 10, n < 128) || (n = r[e.pos++], i |= (n & 127) << 17, n < 128) || (n = r[e.pos++], i |= (n & 127) << 24, n < 128) || (n = r[e.pos++], i |= (n & 1) << 31, n < 128))
    return A(t, i);
  throw new Error("Expected varint not more than 10 bytes");
}
function I(t) {
  const e = t.buf;
  let r = e[t.pos++], n = r & 127;
  return r < 128 || (r = e[t.pos++], n |= (r & 127) << 7, r < 128) || (r = e[t.pos++], n |= (r & 127) << 14, r < 128) || (r = e[t.pos++], n |= (r & 127) << 21, r < 128) ? n : (r = e[t.pos], n |= (r & 15) << 28, gt(n, t));
}
function vt(t, e, r, n) {
  if (n === 0) {
    r === 1 && (e[0] = t - 1 - e[0], e[1] = t - 1 - e[1]);
    const i = e[0];
    e[0] = e[1], e[1] = i;
  }
}
var pt = [
  0,
  1,
  5,
  21,
  85,
  341,
  1365,
  5461,
  21845,
  87381,
  349525,
  1398101,
  5592405,
  22369621,
  89478485,
  357913941,
  1431655765,
  5726623061,
  22906492245,
  91625968981,
  366503875925,
  1466015503701,
  5864062014805,
  23456248059221,
  93824992236885,
  375299968947541,
  1501199875790165
];
function yt(t, e, r) {
  if (t > 26)
    throw Error("Tile zoom level exceeds max safe number limit (26)");
  if (e > _(2, t) - 1 || r > _(2, t) - 1)
    throw Error("tile x/y outside zoom level bounds");
  const n = pt[t], i = _(2, t);
  let o = 0, s = 0, c = 0;
  const h = [e, r];
  let l = i / 2;
  for (; l > 0; )
    o = (h[0] & l) > 0 ? 1 : 0, s = (h[1] & l) > 0 ? 1 : 0, c += l * l * (3 * o ^ s), vt(l, h, o, s), l = l / 2;
  return n + c;
}
function Ve(t, e) {
  return p(this, null, function* () {
    if (e === 1 || e === 0)
      return t;
    if (e === 2) {
      if (typeof globalThis.DecompressionStream > "u")
        return re(new Uint8Array(t));
      const r = new Response(t).body;
      if (!r)
        throw Error("Failed to read response stream");
      const n = r.pipeThrough(
        // biome-ignore lint: needed to detect DecompressionStream in browser+node+cloudflare workers
        new globalThis.DecompressionStream("gzip")
      );
      return new Response(n).arrayBuffer();
    }
    throw Error("Compression method not supported");
  });
}
var b = /* @__PURE__ */ ((t) => (t[t.Unknown = 0] = "Unknown", t[t.Mvt = 1] = "Mvt", t[t.Png = 2] = "Png", t[t.Jpeg = 3] = "Jpeg", t[t.Webp = 4] = "Webp", t[t.Avif = 5] = "Avif", t))(b || {}), wt = 127;
function xt(t, e) {
  let r = 0, n = t.length - 1;
  for (; r <= n; ) {
    const i = n + r >> 1, o = e - t[i].tileId;
    if (o > 0)
      r = i + 1;
    else if (o < 0)
      n = i - 1;
    else
      return t[i];
  }
  return n >= 0 && (t[n].runLength === 0 || e - t[n].tileId < t[n].runLength) ? t[n] : null;
}
var Dt = class {
  constructor(t, e = new Headers()) {
    this.url = t, this.customHeaders = e, this.mustReload = !1;
  }
  getKey() {
    return this.url;
  }
  setHeaders(t) {
    this.customHeaders = t;
  }
  getBytes(t, e, r, n) {
    return p(this, null, function* () {
      let i, o;
      r ? o = r : (i = new AbortController(), o = i.signal);
      const s = new Headers(this.customHeaders);
      s.set("range", `bytes=${t}-${t + e - 1}`);
      let c;
      this.mustReload && (c = "reload");
      let h = yield fetch(this.url, {
        signal: o,
        cache: c,
        headers: s
        //biome-ignore lint: "cache" is incompatible between cloudflare workers and browser
      });
      if (t === 0 && h.status === 416) {
        const f = h.headers.get("Content-Range");
        if (!f || !f.startsWith("bytes */"))
          throw Error("Missing content-length on 416 response");
        const m = +f.substr(8);
        h = yield fetch(this.url, {
          signal: o,
          cache: "reload",
          headers: { range: `bytes=0-${m - 1}` }
          //biome-ignore lint: "cache" is incompatible between cloudflare workers and browser
        });
      }
      let l = h.headers.get("Etag");
      if (l != null && l.startsWith("W/") && (l = null), h.status === 416 || n && l && l !== n)
        throw this.mustReload = !0, new ne(n);
      if (h.status >= 300)
        throw Error(`Bad response code: ${h.status}`);
      const a = h.headers.get("Content-Length");
      if (h.status === 200 && (!a || +a > e))
        throw i && i.abort(), Error(
          "Server returned no content-length header or content-length exceeding request. Check that your storage backend supports HTTP Byte Serving."
        );
      return {
        data: yield h.arrayBuffer(),
        etag: l || void 0,
        cacheControl: h.headers.get("Cache-Control") || void 0,
        expires: h.headers.get("Expires") || void 0
      };
    });
  }
};
function U(t, e) {
  const r = t.getUint32(e + 4, !0), n = t.getUint32(e + 0, !0);
  return r * _(2, 32) + n;
}
function Lt(t, e) {
  const r = new DataView(t), n = r.getUint8(7);
  if (n > 3)
    throw Error(
      `Archive is spec version ${n} but this library supports up to spec version 3`
    );
  return {
    specVersion: n,
    rootDirectoryOffset: U(r, 8),
    rootDirectoryLength: U(r, 16),
    jsonMetadataOffset: U(r, 24),
    jsonMetadataLength: U(r, 32),
    leafDirectoryOffset: U(r, 40),
    leafDirectoryLength: U(r, 48),
    tileDataOffset: U(r, 56),
    tileDataLength: U(r, 64),
    numAddressedTiles: U(r, 72),
    numTileEntries: U(r, 80),
    numTileContents: U(r, 88),
    clustered: r.getUint8(96) === 1,
    internalCompression: r.getUint8(97),
    tileCompression: r.getUint8(98),
    tileType: r.getUint8(99),
    minZoom: r.getUint8(100),
    maxZoom: r.getUint8(101),
    minLon: r.getInt32(102, !0) / 1e7,
    minLat: r.getInt32(106, !0) / 1e7,
    maxLon: r.getInt32(110, !0) / 1e7,
    maxLat: r.getInt32(114, !0) / 1e7,
    centerZoom: r.getUint8(118),
    centerLon: r.getInt32(119, !0) / 1e7,
    centerLat: r.getInt32(123, !0) / 1e7,
    etag: e
  };
}
function Ze(t) {
  const e = { buf: new Uint8Array(t), pos: 0 }, r = I(e), n = [];
  let i = 0;
  for (let o = 0; o < r; o++) {
    const s = I(e);
    n.push({ tileId: i + s, offset: 0, length: 0, runLength: 1 }), i += s;
  }
  for (let o = 0; o < r; o++)
    n[o].runLength = I(e);
  for (let o = 0; o < r; o++)
    n[o].length = I(e);
  for (let o = 0; o < r; o++) {
    const s = I(e);
    s === 0 && o > 0 ? n[o].offset = n[o - 1].offset + n[o - 1].length : n[o].offset = s - 1;
  }
  return n;
}
function Tt(t) {
  const e = new DataView(t);
  return e.getUint16(2, !0) === 2 ? (console.warn(
    "PMTiles spec version 2 has been deprecated; please see github.com/protomaps/PMTiles for tools to upgrade"
  ), 2) : e.getUint16(2, !0) === 1 ? (console.warn(
    "PMTiles spec version 1 has been deprecated; please see github.com/protomaps/PMTiles for tools to upgrade"
  ), 1) : 3;
}
var ne = class extends Error {
};
function Ut(t, e) {
  return p(this, null, function* () {
    const r = yield t.getBytes(0, 16384);
    if (new DataView(r.data).getUint16(0, !0) !== 19792)
      throw new Error("Wrong magic number for PMTiles archive");
    if (Tt(r.data) < 3)
      return [yield Be.getHeader(t)];
    const i = r.data.slice(0, wt), o = Lt(i, r.etag), s = r.data.slice(
      o.rootDirectoryOffset,
      o.rootDirectoryOffset + o.rootDirectoryLength
    ), c = `${t.getKey()}|${o.etag || ""}|${o.rootDirectoryOffset}|${o.rootDirectoryLength}`, h = Ze(
      yield e(s, o.internalCompression)
    );
    return [o, [c, h.length, h]];
  });
}
function Et(t, e, r, n, i) {
  return p(this, null, function* () {
    const o = yield t.getBytes(r, n, void 0, i.etag), s = yield e(o.data, i.internalCompression), c = Ze(s);
    if (c.length === 0)
      throw new Error("Empty directory is invalid");
    return c;
  });
}
var bt = class {
  constructor(t = 100, e = !0, r = Ve) {
    this.cache = /* @__PURE__ */ new Map(), this.invalidations = /* @__PURE__ */ new Map(), this.maxCacheEntries = t, this.counter = 1, this.decompress = r;
  }
  getHeader(t) {
    return p(this, null, function* () {
      const e = t.getKey(), r = this.cache.get(e);
      if (r)
        return r.lastUsed = this.counter++, yield r.data;
      const n = new Promise((i, o) => {
        Ut(t, this.decompress).then((s) => {
          s[1] && this.cache.set(s[1][0], {
            lastUsed: this.counter++,
            data: Promise.resolve(s[1][2])
          }), i(s[0]), this.prune();
        }).catch((s) => {
          o(s);
        });
      });
      return this.cache.set(e, { lastUsed: this.counter++, data: n }), n;
    });
  }
  getDirectory(t, e, r, n) {
    return p(this, null, function* () {
      const i = `${t.getKey()}|${n.etag || ""}|${e}|${r}`, o = this.cache.get(i);
      if (o)
        return o.lastUsed = this.counter++, yield o.data;
      const s = new Promise((c, h) => {
        Et(t, this.decompress, e, r, n).then((l) => {
          c(l), this.prune();
        }).catch((l) => {
          h(l);
        });
      });
      return this.cache.set(i, { lastUsed: this.counter++, data: s }), s;
    });
  }
  // for v2 backwards compatibility
  getArrayBuffer(t, e, r, n) {
    return p(this, null, function* () {
      const i = `${t.getKey()}|${n.etag || ""}|${e}|${r}`, o = this.cache.get(i);
      if (o)
        return o.lastUsed = this.counter++, yield o.data;
      const s = new Promise((c, h) => {
        t.getBytes(e, r, void 0, n.etag).then((l) => {
          c(l.data), this.cache.has(i), this.prune();
        }).catch((l) => {
          h(l);
        });
      });
      return this.cache.set(i, { lastUsed: this.counter++, data: s }), s;
    });
  }
  prune() {
    if (this.cache.size >= this.maxCacheEntries) {
      let t = 1 / 0, e;
      this.cache.forEach((r, n) => {
        r.lastUsed < t && (t = r.lastUsed, e = n);
      }), e && this.cache.delete(e);
    }
  }
  invalidate(t) {
    return p(this, null, function* () {
      const e = t.getKey();
      if (this.invalidations.get(e))
        return yield this.invalidations.get(e);
      this.cache.delete(t.getKey());
      const r = new Promise((n, i) => {
        this.getHeader(t).then((o) => {
          n(), this.invalidations.delete(e);
        }).catch((o) => {
          i(o);
        });
      });
      this.invalidations.set(e, r);
    });
  }
}, q = class {
  constructor(t, e, r) {
    typeof t == "string" ? this.source = new Dt(t) : this.source = t, r ? this.decompress = r : this.decompress = Ve, e ? this.cache = e : this.cache = new bt();
  }
  getHeader() {
    return p(this, null, function* () {
      return yield this.cache.getHeader(this.source);
    });
  }
  getZxyAttempt(t, e, r, n) {
    return p(this, null, function* () {
      const i = yt(t, e, r), o = yield this.cache.getHeader(this.source);
      if (o.specVersion < 3)
        return Be.getZxy(o, this.source, this.cache, t, e, r, n);
      if (t < o.minZoom || t > o.maxZoom)
        return;
      let s = o.rootDirectoryOffset, c = o.rootDirectoryLength;
      for (let h = 0; h <= 3; h++) {
        const l = yield this.cache.getDirectory(
          this.source,
          s,
          c,
          o
        ), a = xt(l, i);
        if (a) {
          if (a.runLength > 0) {
            const u = yield this.source.getBytes(
              o.tileDataOffset + a.offset,
              a.length,
              n,
              o.etag
            );
            return {
              data: yield this.decompress(u.data, o.tileCompression),
              cacheControl: u.cacheControl,
              expires: u.expires
            };
          }
          s = o.leafDirectoryOffset + a.offset, c = a.length;
        } else
          return;
      }
      throw Error("Maximum directory depth exceeded");
    });
  }
  getZxy(t, e, r, n) {
    return p(this, null, function* () {
      try {
        return yield this.getZxyAttempt(t, e, r, n);
      } catch (i) {
        if (i instanceof ne)
          return this.cache.invalidate(this.source), yield this.getZxyAttempt(t, e, r, n);
        throw i;
      }
    });
  }
  getMetadataAttempt() {
    return p(this, null, function* () {
      const t = yield this.cache.getHeader(this.source), e = yield this.source.getBytes(
        t.jsonMetadataOffset,
        t.jsonMetadataLength,
        void 0,
        t.etag
      ), r = yield this.decompress(
        e.data,
        t.internalCompression
      ), n = new TextDecoder("utf-8");
      return JSON.parse(n.decode(r));
    });
  }
  getMetadata() {
    return p(this, null, function* () {
      try {
        return yield this.getMetadataAttempt();
      } catch (t) {
        if (t instanceof ne)
          return this.cache.invalidate(this.source), yield this.getMetadataAttempt();
        throw t;
      }
    });
  }
};
const Mt = Le.Style.getSourceType("vector"), zt = "pmtile-source", oe = (t, ...e) => {
  for (const r of e)
    for (const n in r)
      t[n] = r[n];
  return t;
}, we = (t) => (180 + t) / 360, xe = (t) => (180 - 180 / Math.PI * Math.log(Math.tan(Math.PI / 4 + t * Math.PI / 360))) / 360;
class Ct {
  constructor(e, r, n) {
    this.bounds = Le.LngLatBounds.convert(this.validateBounds(e)), this.minzoom = r || 0, this.maxzoom = n || 24;
  }
  validateBounds(e) {
    return !Array.isArray(e) || e.length !== 4 ? [-180, -90, 180, 90] : [
      Math.max(-180, e[0]),
      Math.max(-90, e[1]),
      Math.min(180, e[2]),
      Math.min(90, e[3])
    ];
  }
  contains(e) {
    const r = Math.pow(2, e.z), n = {
      minX: Math.floor(we(this.bounds.getWest()) * r),
      minY: Math.floor(xe(this.bounds.getNorth()) * r),
      maxX: Math.ceil(we(this.bounds.getEast()) * r),
      maxY: Math.ceil(xe(this.bounds.getSouth()) * r)
    };
    return e.x >= n.minX && e.x < n.maxX && e.y >= n.minY && e.y < n.maxY;
  }
}
class $ {
  constructor(e, r = {}) {
    oe(this, r), this.type = e;
  }
}
class ee extends $ {
  constructor(e, r = {}) {
    super("error", oe({ error: e }, r));
  }
}
const se = class se extends Mt {
  /**
   * 
   * @param args 
   */
  constructor(...e) {
    super(...e), this.roundZoom = !0, this.type = "vector";
    const [r, n, i, o] = e;
    this.id = r, this._dataType = "vector", this.dispatcher = i, this._implementation = n, this._implementation || this.fire(new ee(new Error(`Missing implementation for ${this.id} custom source`)));
    const { url: s } = n;
    this.reparseOverscaled = !0, this.scheme = "zxy", this.tileSize = 512, this._loaded = !1, this.type = "vector", this._protocol = new mt(), this.tiles = [`pmtiles://${s}/{z}/{x}/{y}`];
    const c = new q(s);
    this._protocol.add(c), this._instance = c;
  }
  /**
   * 
   * @param url The pmTiles URL
   * @returns A Json object of the PmTile's metadata
   */
  static async getMetadata(e) {
    return new q(e).getMetadata();
  }
  zoomToExtent() {
    const { minZoom: e, maxZoom: r, minLon: n, minLat: i, maxLon: o, maxLat: s, centerZoom: c, centerLon: h, centerLat: l } = this.header;
    e != null && r != null && n != null && i != null && o != null && s != null && this.map.fitBounds([
      l,
      h
    ], { maxZoom: c });
  }
  hasTile(e) {
    return !this.tileBounds || this.tileBounds.contains(e.canonical);
  }
  load(e) {
    this._loaded = !1, this.fire(new $("dataloading", { dataType: "source" })), this._tileJSONRequest = Promise.all([this._instance.getHeader(), this._instance.getMetadata()]).then(([r, n]) => {
      this.header = r;
      const { specVersion: i, clustered: o, tileType: s, minZoom: c, maxZoom: h, minLon: l, minLat: a, maxLon: u, maxLat: f, centerZoom: m, centerLon: g, centerLat: x } = r;
      switch (c != null && h != null && l != null && a != null && u != null && f != null && (this.tileBounds = new Ct(
        [l, a, u, f],
        c,
        h
      ), this.minzoom = c, this.maxzoom = h), this.maxzoom == null && console.warn("The maxzoom parameter is not defined in the source json. This can cause memory leak. So make sure to define maxzoom in the layer"), this._tileJSONRequest = void 0, this._loaded = !0, oe(this, n), this.tileType = s, s) {
        case b.Png:
          this.contentType = "image/png";
          break;
        case b.Jpeg:
          this.contentType = "image/jpeg";
          break;
        case b.Webp:
          this.contentType = "image/webp";
          break;
        case b.Avif:
          this.contentType = "image/avif";
          break;
      }
      [b.Jpeg, b.Png].includes(this.tileType) ? (this.loadTile = this.loadRasterTile, this.type = "raster") : this.tileType === b.Mvt ? (this.loadTile = this.loadVectorTile, this.type = "vector") : this.fire(new ee(new Error("Unsupported Tile Type"))), this.fire(
        new $("data", { dataType: "source", sourceDataType: "metadata" })
      ), this.fire(
        new $("data", { dataType: "source", sourceDataType: "content" })
      );
    }).catch((r) => {
      this.fire(new ee(r)), e && e(r);
    });
  }
  loaded() {
    return this._loaded;
  }
  loadVectorTile(e, r) {
    var h, l, a;
    const n = (u, f) => {
      var m, g;
      if (delete e.request, e.aborted)
        return r(null);
      if (u && u.status !== 404)
        return r(u);
      f && f.resourceTiming && (e.resourceTiming = f.resourceTiming), (m = this.map) != null && m._refreshExpiredTiles && f && e.setExpiryData(f), e.loadVectorData(f, (g = this.map) == null ? void 0 : g.painter), r(null), e.reloadCallback && (this.loadVectorTile(e, e.reloadCallback), e.reloadCallback = null);
    }, i = (h = this.map) == null ? void 0 : h._requestManager.normalizeTileURL(
      e.tileID.canonical.url(this.tiles, this.scheme)
    ), o = (l = this.map) == null ? void 0 : l._requestManager.transformRequest(i, "Tile"), s = {
      request: o,
      data: {},
      uid: e.uid,
      tileID: e.tileID,
      tileZoom: e.tileZoom,
      zoom: e.tileID.overscaledZ,
      tileSize: this.tileSize * e.tileID.overscaleFactor(),
      type: "vector",
      source: this.id,
      scope: this.scope,
      // pixelRatio: browser.devicePixelRatio,
      showCollisionBoxes: (a = this.map) == null ? void 0 : a.showCollisionBoxes,
      promoteId: this.promoteId,
      isSymbolTile: e.isSymbolTile,
      // brightness: this.map.style ? (this.map.style.getBrightness() || 0.0) : 0.0,
      extraShadowCaster: e.isExtraShadowCaster
    }, c = (u, f, m, g) => {
      if (u || !f) {
        n.call(this, u);
        return;
      }
      s.data = {
        cacheControl: m,
        expires: g,
        rawData: f
      }, this.map._refreshExpiredTiles && e.setExpiryData({ cacheControl: m, expires: g }), e.actor && e.actor.send(
        "loadTile",
        s,
        n.bind(this),
        void 0,
        !0
      );
    };
    !e.actor || e.state === "expired" ? (e.actor = this._tileWorkers[i] = this._tileWorkers[i] || this.dispatcher.getActor(), e.request = this._protocol.tile({ ...o }, c)) : e.state === "loading" ? e.reloadCallback = r : e.request = this._protocol.tile({ ...e, url: i }, c);
  }
  loadRasterTileData(e, r) {
    e.setTexture(r, this.map.painter);
  }
  loadRasterTile(e, r) {
    var c, h;
    const n = ({ data: l, cacheControl: a, expires: u }) => {
      if (delete e.request, e.aborted)
        return r(null);
      if (l == null) {
        const m = { width: this.tileSize, height: this.tileSize, data: null };
        return this.loadRasterTileData(e, m), e.state = "loaded", r(null);
      }
      l && l.resourceTiming && (e.resourceTiming = l.resourceTiming), this.map._refreshExpiredTiles && e.setExpiryData({ cacheControl: a, expires: u });
      const f = new window.Blob([new Uint8Array(l)], { type: "image/png" });
      window.createImageBitmap(f).then((m) => {
        this.loadRasterTileData(e, m), e.state = "loaded", r(null);
      }).catch((m) => (e.state = "errored", r(new Error(`Can't infer data type for ${this.id}, only raster data supported at the moment. ${m}`))));
    }, i = (c = this.map) == null ? void 0 : c._requestManager.normalizeTileURL(
      e.tileID.canonical.url(this.tiles, this.scheme)
    ), o = (h = this.map) == null ? void 0 : h._requestManager.transformRequest(i, "Tile"), s = new AbortController();
    e.request = { cancel: () => s.abort() }, this._protocol.tile(o, s).then(n.bind(this)).catch((l) => {
      l.code !== 20 && (e.state = "errored", r(l));
    });
  }
};
se.SOURCE_TYPE = zt;
let De = se;
export {
  De as PmTilesSource,
  zt as SOURCE_TYPE,
  De as default
};
