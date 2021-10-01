/* eslint-disable @typescript-eslint/ban-ts-comment */
/** Generate by swagger-axios-codegen */
// @ts-nocheck
/* eslint-disable */

/** Generate by swagger-axios-codegen */
/* eslint-disable */
// @ts-nocheck
import axiosStatic, { AxiosInstance, AxiosRequestConfig } from 'axios';

export interface IRequestOptions extends AxiosRequestConfig {}

export interface IRequestConfig {
  method?: any;
  headers?: any;
  url?: any;
  data?: any;
  params?: any;
}

// Add options interface
export interface ServiceOptions {
  axios?: AxiosInstance;
}

// Add default options
export const serviceOptions: ServiceOptions = {};

// Instance selector
export function axios(configs: IRequestConfig, resolve: (p: any) => void, reject: (p: any) => void): Promise<any> {
  if (serviceOptions.axios) {
    return serviceOptions.axios
      .request(configs)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  } else {
    throw new Error('please inject yourself instance like axios  ');
  }
}

export function getConfigs(method: string, contentType: string, url: string, options: any): IRequestConfig {
  const configs: IRequestConfig = { ...options, method, url };
  configs.headers = {
    ...options.headers,
    'Content-Type': contentType
  };
  return configs;
}

export const basePath = '';

export interface IList<T> extends Array<T> {}
export interface List<T> extends Array<T> {}
export interface IDictionary<TValue> {
  [key: string]: TValue;
}
export interface Dictionary<TValue> extends IDictionary<TValue> {}

export interface IListResult<T> {
  items?: T[];
}

export class ListResultDto<T> implements IListResult<T> {
  items?: T[];
}

export interface IPagedResult<T> extends IListResult<T> {
  totalCount?: number;
  items?: T[];
}

export class PagedResultDto<T = any> implements IPagedResult<T> {
  totalCount?: number;
  items?: T[];
}

// customer definition
// empty

export class ReservationService {
  /**
   *
   */
  static availability(
    params: {
      /**  */
      departure: string;
      /**  */
      destination: string;
      /**  */
      departureDate: string;
      /**  */
      pageNumber?: number;
      /**  */
      durations: string;
      /**  */
      numberOfRooms: number;
      /**  */
      numberOfAdults: number;
      /**  */
      recordPerPage?: number;
      /**  */
      child1?: number;
      /**  */
      child2?: number;
      /**  */
      child3?: number;
      /**  */
      child4?: number;
      /**  */
      hotelIds?: string;
      /**  */
      priceMin?: number;
      /**  */
      priceMax?: number;
      /**  */
      allInclusive?: boolean;
      /**  */
      beach?: boolean;
      /**  */
      casino?: boolean;
      /**  */
      family?: boolean;
      /**  */
      golf?: boolean;
      /**  */
      kitchenette?: boolean;
      /**  */
      oceanView?: boolean;
      /**  */
      miniClub?: boolean;
      /**  */
      spa?: boolean;
      /**  */
      weddings?: boolean;
      /**  */
      adultsOnly?: boolean;
      /**  */
      wifi?: boolean;
      /**  */
      waterpark?: boolean;
      /**  */
      villa?: boolean;
      /**  */
      swimout?: boolean;
      /**  */
      starsMin?: number;
      /**  */
      starsMax?: number;
      /**  */
      directFlight?: boolean;
      /**  */
      tourOperators?: string;
      /**  */
      maxWait?: number;
      /**  */
      groupingHotel?: boolean;
      /**  */
      flexibleDate?: boolean;
      /**  */
      flexibleDaysMax?: number;
      /**  */
      flexibleDaysMin?: number;
      /**  */
      nextAvailableDatesMax?: number;
      /**  */
      noExtraSingle?: boolean;
      /**  */
      hotelDistanceMax?: number;
      /**  */
      numberOfRoomsMax?: number;
      /**  */
      sort?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<AvailabilityResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/Reservation/Availability';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        Departure: params['departure'],
        Destination: params['destination'],
        DepartureDate: params['departureDate'],
        PageNumber: params['pageNumber'],
        Durations: params['durations'],
        NumberOfRooms: params['numberOfRooms'],
        NumberOfAdults: params['numberOfAdults'],
        RecordPerPage: params['recordPerPage'],
        Child1: params['child1'],
        Child2: params['child2'],
        Child3: params['child3'],
        Child4: params['child4'],
        HotelIds: params['hotelIds'],
        PriceMin: params['priceMin'],
        PriceMax: params['priceMax'],
        AllInclusive: params['allInclusive'],
        Beach: params['beach'],
        Casino: params['casino'],
        Family: params['family'],
        Golf: params['golf'],
        Kitchenette: params['kitchenette'],
        OceanView: params['oceanView'],
        MiniClub: params['miniClub'],
        SPA: params['spa'],
        Weddings: params['weddings'],
        AdultsOnly: params['adultsOnly'],
        Wifi: params['wifi'],
        Waterpark: params['waterpark'],
        Villa: params['villa'],
        Swimout: params['swimout'],
        StarsMin: params['starsMin'],
        StarsMax: params['starsMax'],
        DirectFlight: params['directFlight'],
        TourOperators: params['tourOperators'],
        MaxWait: params['maxWait'],
        GroupingHotel: params['groupingHotel'],
        FlexibleDate: params['flexibleDate'],
        FlexibleDaysMax: params['flexibleDaysMax'],
        FlexibleDaysMin: params['flexibleDaysMin'],
        NextAvailableDatesMax: params['nextAvailableDatesMax'],
        NoExtraSingle: params['noExtraSingle'],
        HotelDistanceMax: params['hotelDistanceMax'],
        NumberOfRoomsMax: params['numberOfRoomsMax'],
        Sort: params['sort']
      };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static verify(
    params: {
      /**  */
      id: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<VerifyResponse> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/Reservation/Verify';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);
      configs.params = { id: params['id'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export class ResourceService {
  /**
   *
   */
  static getDepartures(options: IRequestOptions = {}): Promise<DepartureVMPaginatedList> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/Resource/GetDepartures';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static getDestinations(
    params: {
      /**  */
      id: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<DestinationPaginatedList> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/Resource/GetDestinations';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { id: params['id'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static getTourOperators(options: IRequestOptions = {}): Promise<TourOperatorPaginatedList> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/Resource/GetTourOperators';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static getCountries(options: IRequestOptions = {}): Promise<CountryPaginatedList> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/Resource/GetCountries';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export class StatService {
  /**
   *
   */
  static downloadStatistics(options: IRequestOptions = {}): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/Stat/DownloadStatistics';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export interface TourOperator {
  /**  */
  id?: string;

  /**  */
  name?: string;

  /**  */
  logo?: string;

  /**  */
  redress?: string;
}

export interface TourOperatorDescription {
  /**  */
  name?: string;

  /**  */
  url?: string;
}

export interface Meal {
  /**  */
  name?: string;

  /**  */
  description?: string;
}

export interface Room {
  /**  */
  name?: string;

  /**  */
  description?: string;

  /**  */
  occupancyName?: string;

  /**  */
  occupancyDescription?: string;
}

export interface SHotelReview {
  /**  */
  numberOfReviews?: number;

  /**  */
  evaluation?: number;
}

export interface SHotelStatistics {
  /**  */
  numberOfSeatsLeft?: number;

  /**  */
  numberOfRoomsLeft?: number;

  /**  */
  lastBookingDate?: string;

  /**  */
  bookingsInLastYear?: number;

  /**  */
  bookingsInToday?: number;

  /**  */
  bookingsInLast24H?: number;

  /**  */
  bookingsInLast48H?: number;

  /**  */
  rankInLastYear?: number;

  /**  */
  rankTotal?: number;
}

export interface SHotel {
  /**  */
  id?: number;

  /**  */
  name?: string;

  /**  */
  star?: number;

  /**  */
  url?: string;

  /**  */
  image?: string;

  /**  */
  review?: SHotelReview;

  /**  */
  statistics?: SHotelStatistics;
}

export interface Destination {
  /**  */
  id?: string;

  /**  */
  name?: string;

  /**  */
  type?: DestinationType;
}

export interface Pricing {
  /**  */
  was?: number;

  /**  */
  save?: number;

  /**  */
  amount?: number;

  /**  */
  currency?: CurrencyTypes;

  /**  */
  rate?: number;
}

export interface Airline {
  /**  */
  name?: string;

  /**  */
  id?: string;

  /**  */
  logo?: string;
}

export interface Airport {
  /**  */
  name?: string;

  /**  */
  id?: string;

  /**  */
  cityName?: string;

  /**  */
  country?: string;
}

export interface Flight {
  /**  */
  airline?: Airline;

  /**  */
  number?: string;

  /**  */
  departure?: Airport;

  /**  */
  departureDate?: string;

  /**  */
  departureTime?: string;

  /**  */
  arrival?: Airport;

  /**  */
  arrivalDate?: string;

  /**  */
  arrivalTime?: string;

  /**  */
  legType?: string;

  /**  */
  class?: string;

  /**  */
  classCategory?: string;

  /**  */
  operatingBy?: Airline;

  /**  */
  numberOfStops?: number;

  /**  */
  via?: Airport;
}

export interface Package {
  /**  */
  id?: string;

  /**  */
  tourOperator?: TourOperator;

  /**  */
  tourOperatorDescription?: TourOperatorDescription;

  /**  */
  meal?: Meal;

  /**  */
  room?: Room;

  /**  */
  hotel?: SHotel;

  /**  */
  destination?: Destination;

  /**  */
  duration?: number;

  /**  */
  price?: Pricing;

  /**  */
  flights?: Flight[];

  /**  */
  gateway?: Airport;

  /**  */
  departureDate?: string;

  /**  */
  checkInDate?: string;

  /**  */
  checkOutDate?: string;

  /**  */
  numberOfNights?: number;

  /**  */
  numberOfRooms?: number;
}

export interface PriceInfo {
  /**  */
  amount?: number;

  /**  */
  currency?: CurrencyTypes;

  /**  */
  rate?: number;
}

export interface GridCell {
  /**  */
  departure?: string;

  /**  */
  destination?: Destination;

  /**  */
  hotelId?: number;

  /**  */
  hotelName?: string;

  /**  */
  room?: Room;

  /**  */
  meal?: Meal;

  /**  */
  departureDate?: string;

  /**  */
  duration?: number;

  /**  */
  star?: number;

  /**  */
  review?: SHotelReview;

  /**  */
  price?: PriceInfo;

  /**  */
  was?: PriceInfo;

  /**  */
  save?: PriceInfo;
}

export interface GridColumn {
  /**  */
  star?: number;

  /**  */
  cell?: GridCell;
}

export interface GridRow {
  /**  */
  date?: string;

  /**  */
  columns?: GridColumn[];
}

export interface AvailabilityResponse {
  /**  */
  id?: string;

  /**  */
  packages?: Package[];

  /**  */
  totalCount?: number;

  /**  */
  grid?: GridRow[];

  /**  */
  availableDates?: string[];
}

export interface VerifyResponse {}

export interface DepartureVM {
  /**  */
  id?: string;

  /**  */
  name?: string;
}

export interface DepartureVMPaginatedList {
  /**  */
  pageSize?: number;

  /**  */
  totalPages?: number;

  /**  */
  pageNumber?: number;

  /**  */
  totalCount?: number;

  /**  */
  data?: DepartureVM[];

  /**  */
  hasPrevious?: boolean;

  /**  */
  hasNext?: boolean;
}

export interface DestinationPaginatedList {
  /**  */
  pageSize?: number;

  /**  */
  totalPages?: number;

  /**  */
  pageNumber?: number;

  /**  */
  totalCount?: number;

  /**  */
  data?: Destination[];

  /**  */
  hasPrevious?: boolean;

  /**  */
  hasNext?: boolean;
}

export interface TourOperatorPaginatedList {
  /**  */
  pageSize?: number;

  /**  */
  totalPages?: number;

  /**  */
  pageNumber?: number;

  /**  */
  totalCount?: number;

  /**  */
  data?: TourOperator[];

  /**  */
  hasPrevious?: boolean;

  /**  */
  hasNext?: boolean;
}

export interface Country {
  /**  */
  code?: string;

  /**  */
  name?: string;

  /**  */
  provinces?: object;
}

export interface CountryPaginatedList {
  /**  */
  pageSize?: number;

  /**  */
  totalPages?: number;

  /**  */
  pageNumber?: number;

  /**  */
  totalCount?: number;

  /**  */
  data?: Country[];

  /**  */
  hasPrevious?: boolean;

  /**  */
  hasNext?: boolean;
}

export type DestinationType = 0 | 1 | 2 | 3;

export type CurrencyTypes = 0 | 1;
