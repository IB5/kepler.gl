"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Copyright (c) 2018 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

exports.default = "#define SHADER_NAME extruded-line-layer-vertex-shader\n\n\nattribute vec3 positions;\nattribute vec3 instanceSourcePositions;\nattribute vec3 instanceTargetPositions;\nattribute vec4 instanceColors;\nattribute vec4 instanceTargetColors;\n\nattribute vec3 instancePickingColors;\nattribute float instanceStrokeWidth;\n\nuniform float strokeScale;\nuniform float opacity;\nuniform float renderPickingBuffer;\nuniform vec4 pickedColor;\n\nuniform float enableBrushing;\nuniform float brushSource;\nuniform float brushTarget;\n\nvarying vec4 vColor;\n\nvoid main(void) {\n  // Position\n  vec3 sourcePos = project_position(instanceSourcePositions);\n  vec3 targetPos = project_position(instanceTargetPositions);\n  vec4 source = project_to_clipspace(vec4(sourcePos, 1.0));\n  vec4 target = project_to_clipspace(vec4(targetPos, 1.0));\n  // if not enabled isPointInRange will always return true\n  float isSourceInBrush = isPointInRange(instanceSourcePositions.xy, brushSource);\n  float isTargetInBrush = isPointInRange(instanceTargetPositions.xy, brushTarget);\n\n  float isInBrush = float(enableBrushing <= 0. ||\n  (brushSource * isSourceInBrush > 0. || brushTarget * isTargetInBrush > 0.));\n\n  // mix strokeScale with brush, if not in brush, return 0\n  float width = strokeScale * instanceStrokeWidth;\n  float finalWidth = mix(0.0, width, isInBrush);\n\n  // linear interpolation of source & target to pick right coord\n  float segmentIndex = positions.x;\n  vec4 p = mix(source, target, segmentIndex);\n\n  // extrude\n  vec2 offset = getExtrusionOffset(target.xy - source.xy, positions.y, finalWidth);\n  gl_Position = p + vec4(offset, 0.0, 0.0);\n\n  float picked = isPicked(instancePickingColors);\n\n  // Color  \n  vec4 color = mix(instanceColors, instanceTargetColors, positions.x) / 255.;\n  vec4 finalColor = mix(color, pickedColor / 255., picked);\n  vec4 pickingColor = vec4(instancePickingColors / 255., 1.);\n\n  vColor = mix(\n    vec4(finalColor.rgb, finalColor.a * opacity),\n    pickingColor,\n    renderPickingBuffer\n  );\n}\n";
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWNrZ2wtbGF5ZXJzL2xpbmUtbGF5ZXIvbGluZS1icnVzaGluZy1sYXllci12ZXJ0ZXguZ2xzbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImxpbmUtYnJ1c2hpbmctbGF5ZXItdmVydGV4Lmdsc2wuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTggVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5leHBvcnQgZGVmYXVsdCBgXFxcbiNkZWZpbmUgU0hBREVSX05BTUUgZXh0cnVkZWQtbGluZS1sYXllci12ZXJ0ZXgtc2hhZGVyXG5cblxuYXR0cmlidXRlIHZlYzMgcG9zaXRpb25zO1xuYXR0cmlidXRlIHZlYzMgaW5zdGFuY2VTb3VyY2VQb3NpdGlvbnM7XG5hdHRyaWJ1dGUgdmVjMyBpbnN0YW5jZVRhcmdldFBvc2l0aW9ucztcbmF0dHJpYnV0ZSB2ZWM0IGluc3RhbmNlQ29sb3JzO1xuYXR0cmlidXRlIHZlYzQgaW5zdGFuY2VUYXJnZXRDb2xvcnM7XG5cbmF0dHJpYnV0ZSB2ZWMzIGluc3RhbmNlUGlja2luZ0NvbG9ycztcbmF0dHJpYnV0ZSBmbG9hdCBpbnN0YW5jZVN0cm9rZVdpZHRoO1xuXG51bmlmb3JtIGZsb2F0IHN0cm9rZVNjYWxlO1xudW5pZm9ybSBmbG9hdCBvcGFjaXR5O1xudW5pZm9ybSBmbG9hdCByZW5kZXJQaWNraW5nQnVmZmVyO1xudW5pZm9ybSB2ZWM0IHBpY2tlZENvbG9yO1xuXG51bmlmb3JtIGZsb2F0IGVuYWJsZUJydXNoaW5nO1xudW5pZm9ybSBmbG9hdCBicnVzaFNvdXJjZTtcbnVuaWZvcm0gZmxvYXQgYnJ1c2hUYXJnZXQ7XG5cbnZhcnlpbmcgdmVjNCB2Q29sb3I7XG5cbnZvaWQgbWFpbih2b2lkKSB7XG4gIC8vIFBvc2l0aW9uXG4gIHZlYzMgc291cmNlUG9zID0gcHJvamVjdF9wb3NpdGlvbihpbnN0YW5jZVNvdXJjZVBvc2l0aW9ucyk7XG4gIHZlYzMgdGFyZ2V0UG9zID0gcHJvamVjdF9wb3NpdGlvbihpbnN0YW5jZVRhcmdldFBvc2l0aW9ucyk7XG4gIHZlYzQgc291cmNlID0gcHJvamVjdF90b19jbGlwc3BhY2UodmVjNChzb3VyY2VQb3MsIDEuMCkpO1xuICB2ZWM0IHRhcmdldCA9IHByb2plY3RfdG9fY2xpcHNwYWNlKHZlYzQodGFyZ2V0UG9zLCAxLjApKTtcbiAgLy8gaWYgbm90IGVuYWJsZWQgaXNQb2ludEluUmFuZ2Ugd2lsbCBhbHdheXMgcmV0dXJuIHRydWVcbiAgZmxvYXQgaXNTb3VyY2VJbkJydXNoID0gaXNQb2ludEluUmFuZ2UoaW5zdGFuY2VTb3VyY2VQb3NpdGlvbnMueHksIGJydXNoU291cmNlKTtcbiAgZmxvYXQgaXNUYXJnZXRJbkJydXNoID0gaXNQb2ludEluUmFuZ2UoaW5zdGFuY2VUYXJnZXRQb3NpdGlvbnMueHksIGJydXNoVGFyZ2V0KTtcblxuICBmbG9hdCBpc0luQnJ1c2ggPSBmbG9hdChlbmFibGVCcnVzaGluZyA8PSAwLiB8fFxuICAoYnJ1c2hTb3VyY2UgKiBpc1NvdXJjZUluQnJ1c2ggPiAwLiB8fCBicnVzaFRhcmdldCAqIGlzVGFyZ2V0SW5CcnVzaCA+IDAuKSk7XG5cbiAgLy8gbWl4IHN0cm9rZVNjYWxlIHdpdGggYnJ1c2gsIGlmIG5vdCBpbiBicnVzaCwgcmV0dXJuIDBcbiAgZmxvYXQgd2lkdGggPSBzdHJva2VTY2FsZSAqIGluc3RhbmNlU3Ryb2tlV2lkdGg7XG4gIGZsb2F0IGZpbmFsV2lkdGggPSBtaXgoMC4wLCB3aWR0aCwgaXNJbkJydXNoKTtcblxuICAvLyBsaW5lYXIgaW50ZXJwb2xhdGlvbiBvZiBzb3VyY2UgJiB0YXJnZXQgdG8gcGljayByaWdodCBjb29yZFxuICBmbG9hdCBzZWdtZW50SW5kZXggPSBwb3NpdGlvbnMueDtcbiAgdmVjNCBwID0gbWl4KHNvdXJjZSwgdGFyZ2V0LCBzZWdtZW50SW5kZXgpO1xuXG4gIC8vIGV4dHJ1ZGVcbiAgdmVjMiBvZmZzZXQgPSBnZXRFeHRydXNpb25PZmZzZXQodGFyZ2V0Lnh5IC0gc291cmNlLnh5LCBwb3NpdGlvbnMueSwgZmluYWxXaWR0aCk7XG4gIGdsX1Bvc2l0aW9uID0gcCArIHZlYzQob2Zmc2V0LCAwLjAsIDAuMCk7XG5cbiAgZmxvYXQgcGlja2VkID0gaXNQaWNrZWQoaW5zdGFuY2VQaWNraW5nQ29sb3JzKTtcblxuICAvLyBDb2xvciAgXG4gIHZlYzQgY29sb3IgPSBtaXgoaW5zdGFuY2VDb2xvcnMsIGluc3RhbmNlVGFyZ2V0Q29sb3JzLCBwb3NpdGlvbnMueCkgLyAyNTUuO1xuICB2ZWM0IGZpbmFsQ29sb3IgPSBtaXgoY29sb3IsIHBpY2tlZENvbG9yIC8gMjU1LiwgcGlja2VkKTtcbiAgdmVjNCBwaWNraW5nQ29sb3IgPSB2ZWM0KGluc3RhbmNlUGlja2luZ0NvbG9ycyAvIDI1NS4sIDEuKTtcblxuICB2Q29sb3IgPSBtaXgoXG4gICAgdmVjNChmaW5hbENvbG9yLnJnYiwgZmluYWxDb2xvci5hICogb3BhY2l0eSksXG4gICAgcGlja2luZ0NvbG9yLFxuICAgIHJlbmRlclBpY2tpbmdCdWZmZXJcbiAgKTtcbn1cbmA7XG4iXX0=