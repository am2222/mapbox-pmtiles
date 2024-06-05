import mapboxgl from "mapbox-gl";
var __pow = Math.pow;
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x2) => x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var u8 = Uint8Array;
var u16 = Uint16Array;
var i32 = Int32Array;
var fleb = new u8([
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
]);
var fdeb = new u8([
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
]);
var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
var freb = function(eb, start) {
  var b = new u16(31);
  for (var i2 = 0; i2 < 31; ++i2) {
    b[i2] = start += 1 << eb[i2 - 1];
  }
  var r = new i32(b[30]);
  for (var i2 = 1; i2 < 30; ++i2) {
    for (var j = b[i2]; j < b[i2 + 1]; ++j) {
      r[j] = j - b[i2] << 5 | i2;
    }
  }
  return { b, r };
};
var _a = freb(fleb, 2);
var fl = _a.b;
var revfl = _a.r;
fl[28] = 258, revfl[258] = 28;
var _b = freb(fdeb, 0);
var fd = _b.b;
var rev = new u16(32768);
for (i = 0; i < 32768; ++i) {
  x = (i & 43690) >> 1 | (i & 21845) << 1;
  x = (x & 52428) >> 2 | (x & 13107) << 2;
  x = (x & 61680) >> 4 | (x & 3855) << 4;
  rev[i] = ((x & 65280) >> 8 | (x & 255) << 8) >> 1;
}
var x;
var i;
var hMap = function(cd, mb, r) {
  var s = cd.length;
  var i2 = 0;
  var l = new u16(mb);
  for (; i2 < s; ++i2) {
    if (cd[i2])
      ++l[cd[i2] - 1];
  }
  var le = new u16(mb);
  for (i2 = 1; i2 < mb; ++i2) {
    le[i2] = le[i2 - 1] + l[i2 - 1] << 1;
  }
  var co;
  if (r) {
    co = new u16(1 << mb);
    var rvb = 15 - mb;
    for (i2 = 0; i2 < s; ++i2) {
      if (cd[i2]) {
        var sv = i2 << 4 | cd[i2];
        var r_1 = mb - cd[i2];
        var v = le[cd[i2] - 1]++ << r_1;
        for (var m = v | (1 << r_1) - 1; v <= m; ++v) {
          co[rev[v] >> rvb] = sv;
        }
      }
    }
  } else {
    co = new u16(s);
    for (i2 = 0; i2 < s; ++i2) {
      if (cd[i2]) {
        co[i2] = rev[le[cd[i2] - 1]++] >> 15 - cd[i2];
      }
    }
  }
  return co;
};
var flt = new u8(288);
for (i = 0; i < 144; ++i)
  flt[i] = 8;
var i;
for (i = 144; i < 256; ++i)
  flt[i] = 9;
var i;
for (i = 256; i < 280; ++i)
  flt[i] = 7;
var i;
for (i = 280; i < 288; ++i)
  flt[i] = 8;
var i;
var fdt = new u8(32);
for (i = 0; i < 32; ++i)
  fdt[i] = 5;
var i;
var flrm = /* @__PURE__ */ hMap(flt, 9, 1);
var fdrm = /* @__PURE__ */ hMap(fdt, 5, 1);
var max = function(a) {
  var m = a[0];
  for (var i2 = 1; i2 < a.length; ++i2) {
    if (a[i2] > m)
      m = a[i2];
  }
  return m;
};
var bits = function(d, p, m) {
  var o = p / 8 | 0;
  return (d[o] | d[o + 1] << 8) >> (p & 7) & m;
};
var bits16 = function(d, p) {
  var o = p / 8 | 0;
  return (d[o] | d[o + 1] << 8 | d[o + 2] << 16) >> (p & 7);
};
var shft = function(p) {
  return (p + 7) / 8 | 0;
};
var slc = function(v, s, e) {
  if (s == null || s < 0)
    s = 0;
  if (e == null || e > v.length)
    e = v.length;
  var n = new u8(e - s);
  n.set(v.subarray(s, e));
  return n;
};
var ec = [
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
];
var err = function(ind, msg, nt) {
  var e = new Error(msg || ec[ind]);
  e.code = ind;
  if (Error.captureStackTrace)
    Error.captureStackTrace(e, err);
  if (!nt)
    throw e;
  return e;
};
var inflt = function(dat, st, buf, dict) {
  var sl = dat.length, dl = dict ? dict.length : 0;
  if (!sl || st.f && !st.l)
    return buf || new u8(0);
  var noBuf = !buf || st.i != 2;
  var noSt = st.i;
  if (!buf)
    buf = new u8(sl * 3);
  var cbuf = function(l2) {
    var bl = buf.length;
    if (l2 > bl) {
      var nbuf = new u8(Math.max(bl * 2, l2));
      nbuf.set(buf);
      buf = nbuf;
    }
  };
  var final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n;
  var tbts = sl * 8;
  do {
    if (!lm) {
      final = bits(dat, pos, 1);
      var type = bits(dat, pos + 1, 3);
      pos += 3;
      if (!type) {
        var s = shft(pos) + 4, l = dat[s - 4] | dat[s - 3] << 8, t = s + l;
        if (t > sl) {
          if (noSt)
            err(0);
          break;
        }
        if (noBuf)
          cbuf(bt + l);
        buf.set(dat.subarray(s, t), bt);
        st.b = bt += l, st.p = pos = t * 8, st.f = final;
        continue;
      } else if (type == 1)
        lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
      else if (type == 2) {
        var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
        var tl = hLit + bits(dat, pos + 5, 31) + 1;
        pos += 14;
        var ldt = new u8(tl);
        var clt = new u8(19);
        for (var i2 = 0; i2 < hcLen; ++i2) {
          clt[clim[i2]] = bits(dat, pos + i2 * 3, 7);
        }
        pos += hcLen * 3;
        var clb = max(clt), clbmsk = (1 << clb) - 1;
        var clm = hMap(clt, clb, 1);
        for (var i2 = 0; i2 < tl; ) {
          var r = clm[bits(dat, pos, clbmsk)];
          pos += r & 15;
          var s = r >> 4;
          if (s < 16) {
            ldt[i2++] = s;
          } else {
            var c = 0, n = 0;
            if (s == 16)
              n = 3 + bits(dat, pos, 3), pos += 2, c = ldt[i2 - 1];
            else if (s == 17)
              n = 3 + bits(dat, pos, 7), pos += 3;
            else if (s == 18)
              n = 11 + bits(dat, pos, 127), pos += 7;
            while (n--)
              ldt[i2++] = c;
          }
        }
        var lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
        lbt = max(lt);
        dbt = max(dt);
        lm = hMap(lt, lbt, 1);
        dm = hMap(dt, dbt, 1);
      } else
        err(1);
      if (pos > tbts) {
        if (noSt)
          err(0);
        break;
      }
    }
    if (noBuf)
      cbuf(bt + 131072);
    var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
    var lpos = pos;
    for (; ; lpos = pos) {
      var c = lm[bits16(dat, pos) & lms], sym = c >> 4;
      pos += c & 15;
      if (pos > tbts) {
        if (noSt)
          err(0);
        break;
      }
      if (!c)
        err(2);
      if (sym < 256)
        buf[bt++] = sym;
      else if (sym == 256) {
        lpos = pos, lm = null;
        break;
      } else {
        var add = sym - 254;
        if (sym > 264) {
          var i2 = sym - 257, b = fleb[i2];
          add = bits(dat, pos, (1 << b) - 1) + fl[i2];
          pos += b;
        }
        var d = dm[bits16(dat, pos) & dms], dsym = d >> 4;
        if (!d)
          err(3);
        pos += d & 15;
        var dt = fd[dsym];
        if (dsym > 3) {
          var b = fdeb[dsym];
          dt += bits16(dat, pos) & (1 << b) - 1, pos += b;
        }
        if (pos > tbts) {
          if (noSt)
            err(0);
          break;
        }
        if (noBuf)
          cbuf(bt + 131072);
        var end = bt + add;
        if (bt < dt) {
          var shift2 = dl - dt, dend = Math.min(dt, end);
          if (shift2 + bt < 0)
            err(3);
          for (; bt < dend; ++bt)
            buf[bt] = dict[shift2 + bt];
        }
        for (; bt < end; bt += 4) {
          buf[bt] = buf[bt - dt];
          buf[bt + 1] = buf[bt + 1 - dt];
          buf[bt + 2] = buf[bt + 2 - dt];
          buf[bt + 3] = buf[bt + 3 - dt];
        }
        bt = end;
      }
    }
    st.l = lm, st.p = lpos, st.b = bt, st.f = final;
    if (lm)
      final = 1, st.m = lbt, st.d = dm, st.n = dbt;
  } while (!final);
  return bt == buf.length ? buf : slc(buf, 0, bt);
};
var et = /* @__PURE__ */ new u8(0);
var gzs = function(d) {
  if (d[0] != 31 || d[1] != 139 || d[2] != 8)
    err(6, "invalid gzip data");
  var flg = d[3];
  var st = 10;
  if (flg & 4)
    st += (d[10] | d[11] << 8) + 2;
  for (var zs = (flg >> 3 & 1) + (flg >> 4 & 1); zs > 0; zs -= !d[st++])
    ;
  return st + (flg & 2);
};
var gzl = function(d) {
  var l = d.length;
  return (d[l - 4] | d[l - 3] << 8 | d[l - 2] << 16 | d[l - 1] << 24) >>> 0;
};
var zls = function(d, dict) {
  if ((d[0] & 15) != 8 || d[0] >> 4 > 7 || (d[0] << 8 | d[1]) % 31)
    err(6, "invalid zlib data");
  if ((d[1] >> 5 & 1) == +!dict)
    err(6, "invalid zlib data: " + (d[1] & 32 ? "need" : "unexpected") + " dictionary");
  return (d[1] >> 3 & 4) + 2;
};
function inflateSync(data, opts) {
  return inflt(data, { i: 2 }, opts && opts.out, opts && opts.dictionary);
}
function gunzipSync(data, opts) {
  var st = gzs(data);
  if (st + 8 > data.length)
    err(6, "invalid gzip data");
  return inflt(data.subarray(st, -8), { i: 2 }, opts && opts.out || new u8(gzl(data)), opts && opts.dictionary);
}
function unzlibSync(data, opts) {
  return inflt(data.subarray(zls(data, opts && opts.dictionary), -4), { i: 2 }, opts && opts.out, opts && opts.dictionary);
}
function decompressSync(data, opts) {
  return data[0] == 31 && data[1] == 139 && data[2] == 8 ? gunzipSync(data, opts) : (data[0] & 15) != 8 || data[0] >> 4 > 7 || (data[0] << 8 | data[1]) % 31 ? inflateSync(data, opts) : unzlibSync(data, opts);
}
var td = typeof TextDecoder != "undefined" && /* @__PURE__ */ new TextDecoder();
var tds = 0;
try {
  td.decode(et, { stream: true });
  tds = 1;
} catch (e) {
}
var shift = (n, shift2) => {
  return n * __pow(2, shift2);
};
var unshift = (n, shift2) => {
  return Math.floor(n / __pow(2, shift2));
};
var getUint24 = (view, pos) => {
  return shift(view.getUint16(pos + 1, true), 8) + view.getUint8(pos);
};
var getUint48 = (view, pos) => {
  return shift(view.getUint32(pos + 2, true), 16) + view.getUint16(pos, true);
};
var compare = (tz, tx, ty, view, i2) => {
  if (tz !== view.getUint8(i2))
    return tz - view.getUint8(i2);
  const x2 = getUint24(view, i2 + 1);
  if (tx !== x2)
    return tx - x2;
  const y = getUint24(view, i2 + 4);
  if (ty !== y)
    return ty - y;
  return 0;
};
var queryLeafdir = (view, z, x2, y) => {
  const offsetLen = queryView(view, z | 128, x2, y);
  if (offsetLen) {
    return {
      z,
      x: x2,
      y,
      offset: offsetLen[0],
      length: offsetLen[1],
      isDir: true
    };
  }
  return null;
};
var queryTile = (view, z, x2, y) => {
  const offsetLen = queryView(view, z, x2, y);
  if (offsetLen) {
    return {
      z,
      x: x2,
      y,
      offset: offsetLen[0],
      length: offsetLen[1],
      isDir: false
    };
  }
  return null;
};
var queryView = (view, z, x2, y) => {
  let m = 0;
  let n = view.byteLength / 17 - 1;
  while (m <= n) {
    const k = n + m >> 1;
    const cmp = compare(z, x2, y, view, k * 17);
    if (cmp > 0) {
      m = k + 1;
    } else if (cmp < 0) {
      n = k - 1;
    } else {
      return [getUint48(view, k * 17 + 7), view.getUint32(k * 17 + 13, true)];
    }
  }
  return null;
};
var entrySort = (a, b) => {
  if (a.isDir && !b.isDir) {
    return 1;
  }
  if (!a.isDir && b.isDir) {
    return -1;
  }
  if (a.z !== b.z) {
    return a.z - b.z;
  }
  if (a.x !== b.x) {
    return a.x - b.x;
  }
  return a.y - b.y;
};
var parseEntry = (dataview, i2) => {
  const zRaw = dataview.getUint8(i2 * 17);
  const z = zRaw & 127;
  return {
    z,
    x: getUint24(dataview, i2 * 17 + 1),
    y: getUint24(dataview, i2 * 17 + 4),
    offset: getUint48(dataview, i2 * 17 + 7),
    length: dataview.getUint32(i2 * 17 + 13, true),
    isDir: zRaw >> 7 === 1
  };
};
var sortDir = (a) => {
  const entries = [];
  const view = new DataView(a);
  for (let i2 = 0; i2 < view.byteLength / 17; i2++) {
    entries.push(parseEntry(view, i2));
  }
  return createDirectory(entries);
};
var createDirectory = (entries) => {
  entries.sort(entrySort);
  const buffer = new ArrayBuffer(17 * entries.length);
  const arr = new Uint8Array(buffer);
  for (let i2 = 0; i2 < entries.length; i2++) {
    const entry = entries[i2];
    let z = entry.z;
    if (entry.isDir)
      z = z | 128;
    arr[i2 * 17] = z;
    arr[i2 * 17 + 1] = entry.x & 255;
    arr[i2 * 17 + 2] = entry.x >> 8 & 255;
    arr[i2 * 17 + 3] = entry.x >> 16 & 255;
    arr[i2 * 17 + 4] = entry.y & 255;
    arr[i2 * 17 + 5] = entry.y >> 8 & 255;
    arr[i2 * 17 + 6] = entry.y >> 16 & 255;
    arr[i2 * 17 + 7] = entry.offset & 255;
    arr[i2 * 17 + 8] = unshift(entry.offset, 8) & 255;
    arr[i2 * 17 + 9] = unshift(entry.offset, 16) & 255;
    arr[i2 * 17 + 10] = unshift(entry.offset, 24) & 255;
    arr[i2 * 17 + 11] = unshift(entry.offset, 32) & 255;
    arr[i2 * 17 + 12] = unshift(entry.offset, 48) & 255;
    arr[i2 * 17 + 13] = entry.length & 255;
    arr[i2 * 17 + 14] = entry.length >> 8 & 255;
    arr[i2 * 17 + 15] = entry.length >> 16 & 255;
    arr[i2 * 17 + 16] = entry.length >> 24 & 255;
  }
  return buffer;
};
var deriveLeaf = (view, tile) => {
  if (view.byteLength < 17)
    return null;
  const numEntries = view.byteLength / 17;
  const entry = parseEntry(view, numEntries - 1);
  if (entry.isDir) {
    const leafLevel = entry.z;
    const levelDiff = tile.z - leafLevel;
    const leafX = Math.trunc(tile.x / (1 << levelDiff));
    const leafY = Math.trunc(tile.y / (1 << levelDiff));
    return { z: leafLevel, x: leafX, y: leafY };
  }
  return null;
};
function getHeader(source) {
  return __async(this, null, function* () {
    const resp = yield source.getBytes(0, 512e3);
    const dataview = new DataView(resp.data);
    const jsonSize = dataview.getUint32(4, true);
    const rootEntries = dataview.getUint16(8, true);
    const dec = new TextDecoder("utf-8");
    const jsonMetadata = JSON.parse(
      dec.decode(new DataView(resp.data, 10, jsonSize))
    );
    let tileCompression = 0;
    if (jsonMetadata.compression === "gzip") {
      tileCompression = 2;
    }
    let minzoom = 0;
    if ("minzoom" in jsonMetadata) {
      minzoom = +jsonMetadata.minzoom;
    }
    let maxzoom = 0;
    if ("maxzoom" in jsonMetadata) {
      maxzoom = +jsonMetadata.maxzoom;
    }
    let centerLon = 0;
    let centerLat = 0;
    let centerZoom = 0;
    let minLon = -180;
    let minLat = -85;
    let maxLon = 180;
    let maxLat = 85;
    if (jsonMetadata.bounds) {
      const split = jsonMetadata.bounds.split(",");
      minLon = +split[0];
      minLat = +split[1];
      maxLon = +split[2];
      maxLat = +split[3];
    }
    if (jsonMetadata.center) {
      const split = jsonMetadata.center.split(",");
      centerLon = +split[0];
      centerLat = +split[1];
      centerZoom = +split[2];
    }
    const header = {
      specVersion: dataview.getUint16(2, true),
      rootDirectoryOffset: 10 + jsonSize,
      rootDirectoryLength: rootEntries * 17,
      jsonMetadataOffset: 10,
      jsonMetadataLength: jsonSize,
      leafDirectoryOffset: 0,
      leafDirectoryLength: void 0,
      tileDataOffset: 0,
      tileDataLength: void 0,
      numAddressedTiles: 0,
      numTileEntries: 0,
      numTileContents: 0,
      clustered: false,
      internalCompression: 1,
      tileCompression,
      tileType: 1,
      minZoom: minzoom,
      maxZoom: maxzoom,
      minLon,
      minLat,
      maxLon,
      maxLat,
      centerZoom,
      centerLon,
      centerLat,
      etag: resp.etag
    };
    return header;
  });
}
function getZxy(header, source, cache, z, x2, y, signal) {
  return __async(this, null, function* () {
    let rootDir = yield cache.getArrayBuffer(
      source,
      header.rootDirectoryOffset,
      header.rootDirectoryLength,
      header
    );
    if (header.specVersion === 1) {
      rootDir = sortDir(rootDir);
    }
    const entry = queryTile(new DataView(rootDir), z, x2, y);
    if (entry) {
      const resp = yield source.getBytes(entry.offset, entry.length, signal);
      let tileData = resp.data;
      const view = new DataView(tileData);
      if (view.getUint8(0) === 31 && view.getUint8(1) === 139) {
        tileData = decompressSync(new Uint8Array(tileData));
      }
      return {
        data: tileData
      };
    }
    const leafcoords = deriveLeaf(new DataView(rootDir), { z, x: x2, y });
    if (leafcoords) {
      const leafdirEntry = queryLeafdir(
        new DataView(rootDir),
        leafcoords.z,
        leafcoords.x,
        leafcoords.y
      );
      if (leafdirEntry) {
        let leafDir = yield cache.getArrayBuffer(
          source,
          leafdirEntry.offset,
          leafdirEntry.length,
          header
        );
        if (header.specVersion === 1) {
          leafDir = sortDir(leafDir);
        }
        const tileEntry = queryTile(new DataView(leafDir), z, x2, y);
        if (tileEntry) {
          const resp = yield source.getBytes(
            tileEntry.offset,
            tileEntry.length,
            signal
          );
          let tileData = resp.data;
          const view = new DataView(tileData);
          if (view.getUint8(0) === 31 && view.getUint8(1) === 139) {
            tileData = decompressSync(new Uint8Array(tileData));
          }
          return {
            data: tileData
          };
        }
      }
    }
    return void 0;
  });
}
var v2_default = {
  getHeader,
  getZxy
};
var v3compat = (v4) => (requestParameters, arg2) => {
  if (arg2 instanceof AbortController) {
    return v4(requestParameters, arg2);
  }
  const abortController = new AbortController();
  v4(requestParameters, abortController).then(
    (result) => {
      return arg2(
        void 0,
        result.data,
        result.cacheControl || "",
        result.expires || ""
      );
    },
    (err2) => {
      return arg2(err2);
    }
  ).catch((e) => {
    return arg2(e);
  });
  return { cancel: () => abortController.abort() };
};
var Protocol = class {
  constructor() {
    this.tilev4 = (params, abortController) => __async(this, null, function* () {
      if (params.type === "json") {
        const pmtilesUrl2 = params.url.substr(10);
        let instance2 = this.tiles.get(pmtilesUrl2);
        if (!instance2) {
          instance2 = new PMTiles(pmtilesUrl2);
          this.tiles.set(pmtilesUrl2, instance2);
        }
        const h = yield instance2.getHeader();
        return {
          data: {
            tiles: [`${params.url}/{z}/{x}/{y}`],
            minzoom: h.minZoom,
            maxzoom: h.maxZoom,
            bounds: [h.minLon, h.minLat, h.maxLon, h.maxLat]
          }
        };
      }
      const re = new RegExp(/pmtiles:\/\/(.+)\/(\d+)\/(\d+)\/(\d+)/);
      const result = params.url.match(re);
      if (!result) {
        throw new Error("Invalid PMTiles protocol URL");
      }
      const pmtilesUrl = result[1];
      let instance = this.tiles.get(pmtilesUrl);
      if (!instance) {
        instance = new PMTiles(pmtilesUrl);
        this.tiles.set(pmtilesUrl, instance);
      }
      const z = result[2];
      const x2 = result[3];
      const y = result[4];
      const header = yield instance.getHeader();
      const resp = yield instance == null ? void 0 : instance.getZxy(+z, +x2, +y, abortController.signal);
      if (resp) {
        return {
          data: new Uint8Array(resp.data),
          cacheControl: resp.cacheControl,
          expires: resp.expires
        };
      }
      if (header.tileType === 1) {
        return { data: new Uint8Array() };
      }
      return { data: null };
    });
    this.tile = v3compat(this.tilev4);
    this.tiles = /* @__PURE__ */ new Map();
  }
  add(p) {
    this.tiles.set(p.source.getKey(), p);
  }
  get(url) {
    return this.tiles.get(url);
  }
};
function toNum(low, high) {
  return (high >>> 0) * 4294967296 + (low >>> 0);
}
function readVarintRemainder(l, p) {
  const buf = p.buf;
  let b = buf[p.pos++];
  let h = (b & 112) >> 4;
  if (b < 128)
    return toNum(l, h);
  b = buf[p.pos++];
  h |= (b & 127) << 3;
  if (b < 128)
    return toNum(l, h);
  b = buf[p.pos++];
  h |= (b & 127) << 10;
  if (b < 128)
    return toNum(l, h);
  b = buf[p.pos++];
  h |= (b & 127) << 17;
  if (b < 128)
    return toNum(l, h);
  b = buf[p.pos++];
  h |= (b & 127) << 24;
  if (b < 128)
    return toNum(l, h);
  b = buf[p.pos++];
  h |= (b & 1) << 31;
  if (b < 128)
    return toNum(l, h);
  throw new Error("Expected varint not more than 10 bytes");
}
function readVarint(p) {
  const buf = p.buf;
  let b = buf[p.pos++];
  let val = b & 127;
  if (b < 128)
    return val;
  b = buf[p.pos++];
  val |= (b & 127) << 7;
  if (b < 128)
    return val;
  b = buf[p.pos++];
  val |= (b & 127) << 14;
  if (b < 128)
    return val;
  b = buf[p.pos++];
  val |= (b & 127) << 21;
  if (b < 128)
    return val;
  b = buf[p.pos];
  val |= (b & 15) << 28;
  return readVarintRemainder(val, p);
}
function rotate(n, xy, rx, ry) {
  if (ry === 0) {
    if (rx === 1) {
      xy[0] = n - 1 - xy[0];
      xy[1] = n - 1 - xy[1];
    }
    const t = xy[0];
    xy[0] = xy[1];
    xy[1] = t;
  }
}
var tzValues = [
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
function zxyToTileId(z, x2, y) {
  if (z > 26) {
    throw Error("Tile zoom level exceeds max safe number limit (26)");
  }
  if (x2 > __pow(2, z) - 1 || y > __pow(2, z) - 1) {
    throw Error("tile x/y outside zoom level bounds");
  }
  const acc = tzValues[z];
  const n = __pow(2, z);
  let rx = 0;
  let ry = 0;
  let d = 0;
  const xy = [x2, y];
  let s = n / 2;
  while (s > 0) {
    rx = (xy[0] & s) > 0 ? 1 : 0;
    ry = (xy[1] & s) > 0 ? 1 : 0;
    d += s * s * (3 * rx ^ ry);
    rotate(s, xy, rx, ry);
    s = s / 2;
  }
  return acc + d;
}
function defaultDecompress(buf, compression) {
  return __async(this, null, function* () {
    if (compression === 1 || compression === 0) {
      return buf;
    }
    if (compression === 2) {
      if (typeof globalThis.DecompressionStream === "undefined") {
        return decompressSync(new Uint8Array(buf));
      }
      const stream = new Response(buf).body;
      if (!stream) {
        throw Error("Failed to read response stream");
      }
      const result = stream.pipeThrough(
        // biome-ignore lint: needed to detect DecompressionStream in browser+node+cloudflare workers
        new globalThis.DecompressionStream("gzip")
      );
      return new Response(result).arrayBuffer();
    }
    throw Error("Compression method not supported");
  });
}
var TileType = /* @__PURE__ */ ((TileType2) => {
  TileType2[TileType2["Unknown"] = 0] = "Unknown";
  TileType2[TileType2["Mvt"] = 1] = "Mvt";
  TileType2[TileType2["Png"] = 2] = "Png";
  TileType2[TileType2["Jpeg"] = 3] = "Jpeg";
  TileType2[TileType2["Webp"] = 4] = "Webp";
  TileType2[TileType2["Avif"] = 5] = "Avif";
  return TileType2;
})(TileType || {});
var HEADER_SIZE_BYTES = 127;
function findTile(entries, tileId) {
  let m = 0;
  let n = entries.length - 1;
  while (m <= n) {
    const k = n + m >> 1;
    const cmp = tileId - entries[k].tileId;
    if (cmp > 0) {
      m = k + 1;
    } else if (cmp < 0) {
      n = k - 1;
    } else {
      return entries[k];
    }
  }
  if (n >= 0) {
    if (entries[n].runLength === 0) {
      return entries[n];
    }
    if (tileId - entries[n].tileId < entries[n].runLength) {
      return entries[n];
    }
  }
  return null;
}
var FetchSource = class {
  constructor(url, customHeaders = new Headers()) {
    this.url = url;
    this.customHeaders = customHeaders;
    this.mustReload = false;
  }
  getKey() {
    return this.url;
  }
  setHeaders(customHeaders) {
    this.customHeaders = customHeaders;
  }
  getBytes(offset, length, passedSignal, etag) {
    return __async(this, null, function* () {
      let controller;
      let signal;
      if (passedSignal) {
        signal = passedSignal;
      } else {
        controller = new AbortController();
        signal = controller.signal;
      }
      const requestHeaders = new Headers(this.customHeaders);
      requestHeaders.set("range", `bytes=${offset}-${offset + length - 1}`);
      let cache;
      if (this.mustReload) {
        cache = "reload";
      }
      let resp = yield fetch(this.url, {
        signal,
        cache,
        headers: requestHeaders
        //biome-ignore lint: "cache" is incompatible between cloudflare workers and browser
      });
      if (offset === 0 && resp.status === 416) {
        const contentRange = resp.headers.get("Content-Range");
        if (!contentRange || !contentRange.startsWith("bytes */")) {
          throw Error("Missing content-length on 416 response");
        }
        const actualLength = +contentRange.substr(8);
        resp = yield fetch(this.url, {
          signal,
          cache: "reload",
          headers: { range: `bytes=0-${actualLength - 1}` }
          //biome-ignore lint: "cache" is incompatible between cloudflare workers and browser
        });
      }
      let newEtag = resp.headers.get("Etag");
      if (newEtag == null ? void 0 : newEtag.startsWith("W/")) {
        newEtag = null;
      }
      if (resp.status === 416 || etag && newEtag && newEtag !== etag) {
        this.mustReload = true;
        throw new EtagMismatch(etag);
      }
      if (resp.status >= 300) {
        throw Error(`Bad response code: ${resp.status}`);
      }
      const contentLength = resp.headers.get("Content-Length");
      if (resp.status === 200 && (!contentLength || +contentLength > length)) {
        if (controller)
          controller.abort();
        throw Error(
          "Server returned no content-length header or content-length exceeding request. Check that your storage backend supports HTTP Byte Serving."
        );
      }
      const a = yield resp.arrayBuffer();
      return {
        data: a,
        etag: newEtag || void 0,
        cacheControl: resp.headers.get("Cache-Control") || void 0,
        expires: resp.headers.get("Expires") || void 0
      };
    });
  }
};
function getUint64(v, offset) {
  const wh = v.getUint32(offset + 4, true);
  const wl = v.getUint32(offset + 0, true);
  return wh * __pow(2, 32) + wl;
}
function bytesToHeader(bytes, etag) {
  const v = new DataView(bytes);
  const specVersion = v.getUint8(7);
  if (specVersion > 3) {
    throw Error(
      `Archive is spec version ${specVersion} but this library supports up to spec version 3`
    );
  }
  return {
    specVersion,
    rootDirectoryOffset: getUint64(v, 8),
    rootDirectoryLength: getUint64(v, 16),
    jsonMetadataOffset: getUint64(v, 24),
    jsonMetadataLength: getUint64(v, 32),
    leafDirectoryOffset: getUint64(v, 40),
    leafDirectoryLength: getUint64(v, 48),
    tileDataOffset: getUint64(v, 56),
    tileDataLength: getUint64(v, 64),
    numAddressedTiles: getUint64(v, 72),
    numTileEntries: getUint64(v, 80),
    numTileContents: getUint64(v, 88),
    clustered: v.getUint8(96) === 1,
    internalCompression: v.getUint8(97),
    tileCompression: v.getUint8(98),
    tileType: v.getUint8(99),
    minZoom: v.getUint8(100),
    maxZoom: v.getUint8(101),
    minLon: v.getInt32(102, true) / 1e7,
    minLat: v.getInt32(106, true) / 1e7,
    maxLon: v.getInt32(110, true) / 1e7,
    maxLat: v.getInt32(114, true) / 1e7,
    centerZoom: v.getUint8(118),
    centerLon: v.getInt32(119, true) / 1e7,
    centerLat: v.getInt32(123, true) / 1e7,
    etag
  };
}
function deserializeIndex(buffer) {
  const p = { buf: new Uint8Array(buffer), pos: 0 };
  const numEntries = readVarint(p);
  const entries = [];
  let lastId = 0;
  for (let i2 = 0; i2 < numEntries; i2++) {
    const v = readVarint(p);
    entries.push({ tileId: lastId + v, offset: 0, length: 0, runLength: 1 });
    lastId += v;
  }
  for (let i2 = 0; i2 < numEntries; i2++) {
    entries[i2].runLength = readVarint(p);
  }
  for (let i2 = 0; i2 < numEntries; i2++) {
    entries[i2].length = readVarint(p);
  }
  for (let i2 = 0; i2 < numEntries; i2++) {
    const v = readVarint(p);
    if (v === 0 && i2 > 0) {
      entries[i2].offset = entries[i2 - 1].offset + entries[i2 - 1].length;
    } else {
      entries[i2].offset = v - 1;
    }
  }
  return entries;
}
function detectVersion(a) {
  const v = new DataView(a);
  if (v.getUint16(2, true) === 2) {
    console.warn(
      "PMTiles spec version 2 has been deprecated; please see github.com/protomaps/PMTiles for tools to upgrade"
    );
    return 2;
  }
  if (v.getUint16(2, true) === 1) {
    console.warn(
      "PMTiles spec version 1 has been deprecated; please see github.com/protomaps/PMTiles for tools to upgrade"
    );
    return 1;
  }
  return 3;
}
var EtagMismatch = class extends Error {
};
function getHeaderAndRoot(source, decompress) {
  return __async(this, null, function* () {
    const resp = yield source.getBytes(0, 16384);
    const v = new DataView(resp.data);
    if (v.getUint16(0, true) !== 19792) {
      throw new Error("Wrong magic number for PMTiles archive");
    }
    if (detectVersion(resp.data) < 3) {
      return [yield v2_default.getHeader(source)];
    }
    const headerData = resp.data.slice(0, HEADER_SIZE_BYTES);
    const header = bytesToHeader(headerData, resp.etag);
    const rootDirData = resp.data.slice(
      header.rootDirectoryOffset,
      header.rootDirectoryOffset + header.rootDirectoryLength
    );
    const dirKey = `${source.getKey()}|${header.etag || ""}|${header.rootDirectoryOffset}|${header.rootDirectoryLength}`;
    const rootDir = deserializeIndex(
      yield decompress(rootDirData, header.internalCompression)
    );
    return [header, [dirKey, rootDir.length, rootDir]];
  });
}
function getDirectory(source, decompress, offset, length, header) {
  return __async(this, null, function* () {
    const resp = yield source.getBytes(offset, length, void 0, header.etag);
    const data = yield decompress(resp.data, header.internalCompression);
    const directory = deserializeIndex(data);
    if (directory.length === 0) {
      throw new Error("Empty directory is invalid");
    }
    return directory;
  });
}
var SharedPromiseCache = class {
  constructor(maxCacheEntries = 100, prefetch = true, decompress = defaultDecompress) {
    this.cache = /* @__PURE__ */ new Map();
    this.invalidations = /* @__PURE__ */ new Map();
    this.maxCacheEntries = maxCacheEntries;
    this.counter = 1;
    this.decompress = decompress;
  }
  getHeader(source) {
    return __async(this, null, function* () {
      const cacheKey = source.getKey();
      const cacheValue = this.cache.get(cacheKey);
      if (cacheValue) {
        cacheValue.lastUsed = this.counter++;
        const data = yield cacheValue.data;
        return data;
      }
      const p = new Promise((resolve, reject) => {
        getHeaderAndRoot(source, this.decompress).then((res) => {
          if (res[1]) {
            this.cache.set(res[1][0], {
              lastUsed: this.counter++,
              data: Promise.resolve(res[1][2])
            });
          }
          resolve(res[0]);
          this.prune();
        }).catch((e) => {
          reject(e);
        });
      });
      this.cache.set(cacheKey, { lastUsed: this.counter++, data: p });
      return p;
    });
  }
  getDirectory(source, offset, length, header) {
    return __async(this, null, function* () {
      const cacheKey = `${source.getKey()}|${header.etag || ""}|${offset}|${length}`;
      const cacheValue = this.cache.get(cacheKey);
      if (cacheValue) {
        cacheValue.lastUsed = this.counter++;
        const data = yield cacheValue.data;
        return data;
      }
      const p = new Promise((resolve, reject) => {
        getDirectory(source, this.decompress, offset, length, header).then((directory) => {
          resolve(directory);
          this.prune();
        }).catch((e) => {
          reject(e);
        });
      });
      this.cache.set(cacheKey, { lastUsed: this.counter++, data: p });
      return p;
    });
  }
  // for v2 backwards compatibility
  getArrayBuffer(source, offset, length, header) {
    return __async(this, null, function* () {
      const cacheKey = `${source.getKey()}|${header.etag || ""}|${offset}|${length}`;
      const cacheValue = this.cache.get(cacheKey);
      if (cacheValue) {
        cacheValue.lastUsed = this.counter++;
        const data = yield cacheValue.data;
        return data;
      }
      const p = new Promise((resolve, reject) => {
        source.getBytes(offset, length, void 0, header.etag).then((resp) => {
          resolve(resp.data);
          if (this.cache.has(cacheKey))
            ;
          this.prune();
        }).catch((e) => {
          reject(e);
        });
      });
      this.cache.set(cacheKey, { lastUsed: this.counter++, data: p });
      return p;
    });
  }
  prune() {
    if (this.cache.size >= this.maxCacheEntries) {
      let minUsed = Infinity;
      let minKey = void 0;
      this.cache.forEach((cacheValue, key) => {
        if (cacheValue.lastUsed < minUsed) {
          minUsed = cacheValue.lastUsed;
          minKey = key;
        }
      });
      if (minKey) {
        this.cache.delete(minKey);
      }
    }
  }
  invalidate(source) {
    return __async(this, null, function* () {
      const key = source.getKey();
      if (this.invalidations.get(key)) {
        return yield this.invalidations.get(key);
      }
      this.cache.delete(source.getKey());
      const p = new Promise((resolve, reject) => {
        this.getHeader(source).then((h) => {
          resolve();
          this.invalidations.delete(key);
        }).catch((e) => {
          reject(e);
        });
      });
      this.invalidations.set(key, p);
    });
  }
};
var PMTiles = class {
  constructor(source, cache, decompress) {
    if (typeof source === "string") {
      this.source = new FetchSource(source);
    } else {
      this.source = source;
    }
    if (decompress) {
      this.decompress = decompress;
    } else {
      this.decompress = defaultDecompress;
    }
    if (cache) {
      this.cache = cache;
    } else {
      this.cache = new SharedPromiseCache();
    }
  }
  getHeader() {
    return __async(this, null, function* () {
      return yield this.cache.getHeader(this.source);
    });
  }
  getZxyAttempt(z, x2, y, signal) {
    return __async(this, null, function* () {
      const tileId = zxyToTileId(z, x2, y);
      const header = yield this.cache.getHeader(this.source);
      if (header.specVersion < 3) {
        return v2_default.getZxy(header, this.source, this.cache, z, x2, y, signal);
      }
      if (z < header.minZoom || z > header.maxZoom) {
        return void 0;
      }
      let dO = header.rootDirectoryOffset;
      let dL = header.rootDirectoryLength;
      for (let depth = 0; depth <= 3; depth++) {
        const directory = yield this.cache.getDirectory(
          this.source,
          dO,
          dL,
          header
        );
        const entry = findTile(directory, tileId);
        if (entry) {
          if (entry.runLength > 0) {
            const resp = yield this.source.getBytes(
              header.tileDataOffset + entry.offset,
              entry.length,
              signal,
              header.etag
            );
            return {
              data: yield this.decompress(resp.data, header.tileCompression),
              cacheControl: resp.cacheControl,
              expires: resp.expires
            };
          }
          dO = header.leafDirectoryOffset + entry.offset;
          dL = entry.length;
        } else {
          return void 0;
        }
      }
      throw Error("Maximum directory depth exceeded");
    });
  }
  getZxy(z, x2, y, signal) {
    return __async(this, null, function* () {
      try {
        return yield this.getZxyAttempt(z, x2, y, signal);
      } catch (e) {
        if (e instanceof EtagMismatch) {
          this.cache.invalidate(this.source);
          return yield this.getZxyAttempt(z, x2, y, signal);
        }
        throw e;
      }
    });
  }
  getMetadataAttempt() {
    return __async(this, null, function* () {
      const header = yield this.cache.getHeader(this.source);
      const resp = yield this.source.getBytes(
        header.jsonMetadataOffset,
        header.jsonMetadataLength,
        void 0,
        header.etag
      );
      const decompressed = yield this.decompress(
        resp.data,
        header.internalCompression
      );
      const dec = new TextDecoder("utf-8");
      return JSON.parse(dec.decode(decompressed));
    });
  }
  getMetadata() {
    return __async(this, null, function* () {
      try {
        return yield this.getMetadataAttempt();
      } catch (e) {
        if (e instanceof EtagMismatch) {
          this.cache.invalidate(this.source);
          return yield this.getMetadataAttempt();
        }
        throw e;
      }
    });
  }
};
const VectorTileSourceImpl = mapboxgl.Style.getSourceType("vector");
const SOURCE_TYPE = "pmtile-source";
const extend = (dest, ...sources) => {
  for (const src of sources) {
    for (const k in src) {
      dest[k] = src[k];
    }
  }
  return dest;
};
const mercatorXFromLng = (lng) => {
  return (180 + lng) / 360;
};
const mercatorYFromLat = (lat) => {
  return (180 - 180 / Math.PI * Math.log(Math.tan(Math.PI / 4 + lat * Math.PI / 360))) / 360;
};
class TileBounds {
  constructor(bounds, minzoom, maxzoom) {
    this.bounds = mapboxgl.LngLatBounds.convert(this.validateBounds(bounds));
    this.minzoom = minzoom || 0;
    this.maxzoom = maxzoom || 24;
  }
  validateBounds(bounds) {
    if (!Array.isArray(bounds) || bounds.length !== 4)
      return [-180, -90, 180, 90];
    return [
      Math.max(-180, bounds[0]),
      Math.max(-90, bounds[1]),
      Math.min(180, bounds[2]),
      Math.min(90, bounds[3])
    ];
  }
  contains(tileID) {
    const worldSize = Math.pow(2, tileID.z);
    const level = {
      minX: Math.floor(mercatorXFromLng(this.bounds.getWest()) * worldSize),
      minY: Math.floor(mercatorYFromLat(this.bounds.getNorth()) * worldSize),
      maxX: Math.ceil(mercatorXFromLng(this.bounds.getEast()) * worldSize),
      maxY: Math.ceil(mercatorYFromLat(this.bounds.getSouth()) * worldSize)
    };
    const hit = tileID.x >= level.minX && tileID.x < level.maxX && tileID.y >= level.minY && tileID.y < level.maxY;
    return hit;
  }
}
class Event {
  constructor(type, data = {}) {
    extend(this, data);
    this.type = type;
  }
}
class ErrorEvent extends Event {
  constructor(error, data = {}) {
    super("error", extend({ error }, data));
  }
}
const _PmTilesSource = class _PmTilesSource extends VectorTileSourceImpl {
  /**
   * The PmTiles source. It mainly should work as a regular source as other mapbox sources.
   * @public
   * 
   * @param id  The unique id of the source
   * @param options The  main pmtiles options
   * @param _dispatcher 
   * @param _eventedParent 
   */
  constructor(id, options, _dispatcher, _eventedParent) {
    super(...[id, options, _dispatcher, _eventedParent]);
    this.roundZoom = true;
    this.type = "vector";
    this.id = id;
    this._dataType = "vector";
    this.dispatcher = _dispatcher;
    this._implementation = options;
    if (!this._implementation) {
      this.fire(new ErrorEvent(new Error(`Missing options for ${this.id} custom source`)));
    }
    const { url } = options;
    this.reparseOverscaled = true;
    this.scheme = "zxy";
    this.tileSize = 512;
    this._loaded = false;
    this.type = "vector";
    this._protocol = new Protocol();
    this.tiles = [`pmtiles://${url}/{z}/{x}/{y}`];
    const p = new PMTiles(url);
    this._protocol.add(p);
    this._instance = p;
  }
  /**
   * An static function to get the metadata of a pmtiles
   * @public
   * @param url The pmTiles URL
   * @returns A Json object of the PmTile's metadata
   */
  static async getMetadata(url) {
    const instance = new PMTiles(url);
    return instance.getMetadata();
  }
  /**
   * An static function to get the header of an pmtiles
   * @public
   * @param url The pmTiles URL
   * @returns A Json object of the PmTile's header
   */
  static async getHeader(url) {
    const instance = new PMTiles(url);
    return instance.getHeader();
  }
  /**
   * the extent of the entire source extracted from pmtiles header
   * @returns {mapboxgl.LngLatBoundsLike} 
   */
  getExtent() {
    const { minZoom, maxZoom, minLon, minLat, maxLon, maxLat, centerZoom, centerLon, centerLat } = this.header;
    return [minLon, minLat, maxLon, maxLat];
  }
  hasTile(tileID) {
    return !this.tileBounds || this.tileBounds.contains(tileID.canonical);
  }
  load(callback) {
    this._loaded = false;
    this.fire(new Event("dataloading", { dataType: "source" }));
    this._tileJSONRequest = Promise.all([this._instance.getHeader(), this._instance.getMetadata()]).then(([header, tileJSON]) => {
      this.header = header;
      const { specVersion, clustered, tileType, minZoom, maxZoom, minLon, minLat, maxLon, maxLat, centerZoom, centerLon, centerLat } = header;
      const requiredVariables = [minZoom, maxZoom, minLon, minLat, maxLon, maxLat];
      if (!requiredVariables.includes(void 0) && !requiredVariables.includes(null)) {
        this.tileBounds = new TileBounds(
          [minLon, minLat, maxLon, maxLat],
          minZoom,
          maxZoom
        );
        this.minzoom = minZoom;
        this.maxzoom = maxZoom;
      }
      if (this.maxzoom == void 0) {
        console.warn("The maxzoom parameter is not defined in the source json. This can cause memory leak. So make sure to define maxzoom in the layer");
      }
      this._tileJSONRequest = void 0;
      this._loaded = true;
      extend(this, tileJSON);
      this.minzoom = Number.parseInt(this.minzoom.toString()) || 0;
      this.maxzoom = Number.parseInt(this.maxzoom.toString()) || 0;
      this.tileType = tileType;
      switch (tileType) {
        case TileType.Png:
          this.contentType = "image/png";
          break;
        case TileType.Jpeg:
          this.contentType = "image/jpeg";
          break;
        case TileType.Webp:
          this.contentType = "image/webp";
          break;
        case TileType.Avif:
          this.contentType = "image/avif";
          break;
      }
      if ([TileType.Jpeg, TileType.Png].includes(this.tileType)) {
        this.loadTile = this.loadRasterTile;
        this.type = "raster";
      } else if (this.tileType === TileType.Mvt) {
        this.loadTile = this.loadVectorTile;
        this.type = "vector";
      } else {
        this.fire(new ErrorEvent(new Error("Unsupported Tile Type")));
      }
      this.fire(
        new Event("data", { dataType: "source", sourceDataType: "metadata" })
      );
      this.fire(
        new Event("data", { dataType: "source", sourceDataType: "content" })
      );
    }).catch((err2) => {
      this.fire(new ErrorEvent(err2));
      if (callback)
        callback(err2);
    });
  }
  loaded() {
    return this._loaded;
  }
  loadVectorTile(tile, callback) {
    var _a2, _b2, _c;
    const done = (err2, data) => {
      var _a3, _b3;
      delete tile.request;
      if (tile.aborted)
        return callback(null);
      if (err2 && err2.status !== 404) {
        return callback(err2);
      }
      if (data && data.resourceTiming)
        tile.resourceTiming = data.resourceTiming;
      if (((_a3 = this.map) == null ? void 0 : _a3._refreshExpiredTiles) && data)
        tile.setExpiryData(data);
      tile.loadVectorData(data, (_b3 = this.map) == null ? void 0 : _b3.painter);
      callback(null);
      if (tile.reloadCallback) {
        this.loadVectorTile(tile, tile.reloadCallback);
        tile.reloadCallback = null;
      }
    };
    const url = (_a2 = this.map) == null ? void 0 : _a2._requestManager.normalizeTileURL(
      tile.tileID.canonical.url(this.tiles, this.scheme)
    );
    const request = (_b2 = this.map) == null ? void 0 : _b2._requestManager.transformRequest(url, "Tile");
    const params = {
      request,
      data: {},
      uid: tile.uid,
      tileID: tile.tileID,
      tileZoom: tile.tileZoom,
      zoom: tile.tileID.overscaledZ,
      tileSize: this.tileSize * tile.tileID.overscaleFactor(),
      type: "vector",
      source: this.id,
      scope: this.scope,
      // pixelRatio: browser.devicePixelRatio,
      showCollisionBoxes: (_c = this.map) == null ? void 0 : _c.showCollisionBoxes,
      promoteId: this.promoteId,
      isSymbolTile: tile.isSymbolTile,
      // brightness: this.map.style ? (this.map.style.getBrightness() || 0.0) : 0.0,
      extraShadowCaster: tile.isExtraShadowCaster
    };
    const afterLoad = (error, data, cacheControl, expires) => {
      if (error || !data) {
        done.call(this, error);
        return;
      }
      params.data = {
        cacheControl,
        expires,
        rawData: data
      };
      if (this.map._refreshExpiredTiles)
        tile.setExpiryData({ cacheControl, expires });
      if (tile.actor)
        tile.actor.send(
          "loadTile",
          params,
          done.bind(this),
          void 0,
          true
        );
    };
    if (!tile.actor || tile.state === "expired") {
      tile.actor = this._tileWorkers[url] = this._tileWorkers[url] || this.dispatcher.getActor();
      tile.request = this._protocol.tile({ ...request }, afterLoad);
    } else if (tile.state === "loading") {
      tile.reloadCallback = callback;
    } else {
      tile.request = this._protocol.tile({ ...tile, url }, afterLoad);
    }
  }
  loadRasterTileData(tile, data) {
    tile.setTexture(data, this.map.painter);
  }
  loadRasterTile(tile, callback) {
    var _a2, _b2;
    const done = ({ data, cacheControl, expires }) => {
      delete tile.request;
      if (tile.aborted)
        return callback(null);
      if (data === null || data === void 0) {
        const emptyImage = { width: this.tileSize, height: this.tileSize, data: null };
        this.loadRasterTileData(tile, emptyImage);
        tile.state = "loaded";
        return callback(null);
      }
      if (data && data.resourceTiming)
        tile.resourceTiming = data.resourceTiming;
      if (this.map._refreshExpiredTiles)
        tile.setExpiryData({ cacheControl, expires });
      const blob = new window.Blob([new Uint8Array(data)], { type: "image/png" });
      window.createImageBitmap(blob).then((imageBitmap) => {
        this.loadRasterTileData(tile, imageBitmap);
        tile.state = "loaded";
        callback(null);
      }).catch((error) => {
        tile.state = "errored";
        return callback(new Error(`Can't infer data type for ${this.id}, only raster data supported at the moment. ${error}`));
      });
    };
    const url = (_a2 = this.map) == null ? void 0 : _a2._requestManager.normalizeTileURL(
      tile.tileID.canonical.url(this.tiles, this.scheme)
    );
    const request = (_b2 = this.map) == null ? void 0 : _b2._requestManager.transformRequest(url, "Tile");
    const controller = new AbortController();
    tile.request = { cancel: () => controller.abort() };
    this._protocol.tile(request, controller).then(done.bind(this)).catch((error) => {
      if (error.code === 20)
        return;
      tile.state = "errored";
      callback(error);
    });
  }
};
_PmTilesSource.SOURCE_TYPE = SOURCE_TYPE;
let PmTilesSource = _PmTilesSource;
export {
  PmTilesSource,
  SOURCE_TYPE,
  PmTilesSource as default
};
