import {Khachhang} from './khachhang';

export interface ISoTietKiemDto {
  id?: number;
  khachHang?: Khachhang;
  ngayMoSo?: string;
  thoiGianKyGui?: string;
  kyHan?: number;
  soTien?: number;
  laiXuat?: number;
  uuDai?: string;
}
