import numpy as np

def calc_displacement(raw_vals, coeffs):
    return np.polyval(coeffs, raw_vals)

def calc_velocity(time, disp):
    v = np.zeros_like(disp)
    if len(time) < 2:
        return v
    v[1:-1] = (disp[2:] - disp[:-2]) / (time[2:] - time[:-2])
    v[0] = (disp[1] - disp[0]) / max(1e-9, (time[1] - time[0]))
    v[-1] = (disp[-1] - disp[-2]) / max(1e-9, (time[-1] - time[-2]))
    return v

def compute_metrics(time, disp, max_travel_mm):
    pct = disp / max_travel_mm * 100
    v = calc_velocity(time, disp)
    d = np.diff(disp, prepend=disp[0])
    dt = np.diff(time, prepend=time[0]) + 1e-9
    comp_v = np.where(d < 0, np.abs(d/dt), 0)
    ext_v = np.where(d > 0, d/dt, 0)
    metrics = {}
    for name, mask in [('lt60', pct < 60), ('gt75', pct > 75)]:
        idx = np.where(mask)[0]
        if len(idx) > 0:
            metrics[f'{name}_comp_mean'] = float(comp_v[idx].mean()) if comp_v[idx].size else None
            metrics[f'{name}_ext_mean'] = float(ext_v[idx].mean()) if ext_v[idx].size else None
        else:
            metrics[f'{name}_comp_mean'] = None
            metrics[f'{name}_ext_mean'] = None
    metrics['avg_travel_pct'] = float(pct.mean()) if len(pct) else None
    metrics['n_bottom_out'] = int((pct > 95).sum()) if len(pct) else 0
    return metrics
