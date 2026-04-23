
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model OtpVerification
 * 
 */
export type OtpVerification = $Result.DefaultSelection<Prisma.$OtpVerificationPayload>
/**
 * Model EmailLog
 * 
 */
export type EmailLog = $Result.DefaultSelection<Prisma.$EmailLogPayload>
/**
 * Model Referral
 * 
 */
export type Referral = $Result.DefaultSelection<Prisma.$ReferralPayload>
/**
 * Model StatusLog
 * 
 */
export type StatusLog = $Result.DefaultSelection<Prisma.$StatusLogPayload>
/**
 * Model Position
 * 
 */
export type Position = $Result.DefaultSelection<Prisma.$PositionPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.otpVerification`: Exposes CRUD operations for the **OtpVerification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OtpVerifications
    * const otpVerifications = await prisma.otpVerification.findMany()
    * ```
    */
  get otpVerification(): Prisma.OtpVerificationDelegate<ExtArgs>;

  /**
   * `prisma.emailLog`: Exposes CRUD operations for the **EmailLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmailLogs
    * const emailLogs = await prisma.emailLog.findMany()
    * ```
    */
  get emailLog(): Prisma.EmailLogDelegate<ExtArgs>;

  /**
   * `prisma.referral`: Exposes CRUD operations for the **Referral** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Referrals
    * const referrals = await prisma.referral.findMany()
    * ```
    */
  get referral(): Prisma.ReferralDelegate<ExtArgs>;

  /**
   * `prisma.statusLog`: Exposes CRUD operations for the **StatusLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StatusLogs
    * const statusLogs = await prisma.statusLog.findMany()
    * ```
    */
  get statusLog(): Prisma.StatusLogDelegate<ExtArgs>;

  /**
   * `prisma.position`: Exposes CRUD operations for the **Position** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Positions
    * const positions = await prisma.position.findMany()
    * ```
    */
  get position(): Prisma.PositionDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    OtpVerification: 'OtpVerification',
    EmailLog: 'EmailLog',
    Referral: 'Referral',
    StatusLog: 'StatusLog',
    Position: 'Position'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "otpVerification" | "emailLog" | "referral" | "statusLog" | "position"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      OtpVerification: {
        payload: Prisma.$OtpVerificationPayload<ExtArgs>
        fields: Prisma.OtpVerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OtpVerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpVerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OtpVerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpVerificationPayload>
          }
          findFirst: {
            args: Prisma.OtpVerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpVerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OtpVerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpVerificationPayload>
          }
          findMany: {
            args: Prisma.OtpVerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpVerificationPayload>[]
          }
          create: {
            args: Prisma.OtpVerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpVerificationPayload>
          }
          createMany: {
            args: Prisma.OtpVerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OtpVerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpVerificationPayload>[]
          }
          delete: {
            args: Prisma.OtpVerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpVerificationPayload>
          }
          update: {
            args: Prisma.OtpVerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpVerificationPayload>
          }
          deleteMany: {
            args: Prisma.OtpVerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OtpVerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OtpVerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpVerificationPayload>
          }
          aggregate: {
            args: Prisma.OtpVerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOtpVerification>
          }
          groupBy: {
            args: Prisma.OtpVerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OtpVerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OtpVerificationCountArgs<ExtArgs>
            result: $Utils.Optional<OtpVerificationCountAggregateOutputType> | number
          }
        }
      }
      EmailLog: {
        payload: Prisma.$EmailLogPayload<ExtArgs>
        fields: Prisma.EmailLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload>
          }
          findFirst: {
            args: Prisma.EmailLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload>
          }
          findMany: {
            args: Prisma.EmailLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload>[]
          }
          create: {
            args: Prisma.EmailLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload>
          }
          createMany: {
            args: Prisma.EmailLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload>[]
          }
          delete: {
            args: Prisma.EmailLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload>
          }
          update: {
            args: Prisma.EmailLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload>
          }
          deleteMany: {
            args: Prisma.EmailLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EmailLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailLogPayload>
          }
          aggregate: {
            args: Prisma.EmailLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmailLog>
          }
          groupBy: {
            args: Prisma.EmailLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailLogCountArgs<ExtArgs>
            result: $Utils.Optional<EmailLogCountAggregateOutputType> | number
          }
        }
      }
      Referral: {
        payload: Prisma.$ReferralPayload<ExtArgs>
        fields: Prisma.ReferralFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReferralFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReferralFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          findFirst: {
            args: Prisma.ReferralFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReferralFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          findMany: {
            args: Prisma.ReferralFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>[]
          }
          create: {
            args: Prisma.ReferralCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          createMany: {
            args: Prisma.ReferralCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReferralCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>[]
          }
          delete: {
            args: Prisma.ReferralDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          update: {
            args: Prisma.ReferralUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          deleteMany: {
            args: Prisma.ReferralDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReferralUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReferralUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPayload>
          }
          aggregate: {
            args: Prisma.ReferralAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReferral>
          }
          groupBy: {
            args: Prisma.ReferralGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReferralGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReferralCountArgs<ExtArgs>
            result: $Utils.Optional<ReferralCountAggregateOutputType> | number
          }
        }
      }
      StatusLog: {
        payload: Prisma.$StatusLogPayload<ExtArgs>
        fields: Prisma.StatusLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StatusLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StatusLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusLogPayload>
          }
          findFirst: {
            args: Prisma.StatusLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StatusLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusLogPayload>
          }
          findMany: {
            args: Prisma.StatusLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusLogPayload>[]
          }
          create: {
            args: Prisma.StatusLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusLogPayload>
          }
          createMany: {
            args: Prisma.StatusLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StatusLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusLogPayload>[]
          }
          delete: {
            args: Prisma.StatusLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusLogPayload>
          }
          update: {
            args: Prisma.StatusLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusLogPayload>
          }
          deleteMany: {
            args: Prisma.StatusLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StatusLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StatusLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusLogPayload>
          }
          aggregate: {
            args: Prisma.StatusLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStatusLog>
          }
          groupBy: {
            args: Prisma.StatusLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<StatusLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.StatusLogCountArgs<ExtArgs>
            result: $Utils.Optional<StatusLogCountAggregateOutputType> | number
          }
        }
      }
      Position: {
        payload: Prisma.$PositionPayload<ExtArgs>
        fields: Prisma.PositionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PositionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PositionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          findFirst: {
            args: Prisma.PositionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PositionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          findMany: {
            args: Prisma.PositionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>[]
          }
          create: {
            args: Prisma.PositionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          createMany: {
            args: Prisma.PositionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PositionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>[]
          }
          delete: {
            args: Prisma.PositionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          update: {
            args: Prisma.PositionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          deleteMany: {
            args: Prisma.PositionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PositionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PositionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          aggregate: {
            args: Prisma.PositionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePosition>
          }
          groupBy: {
            args: Prisma.PositionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PositionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PositionCountArgs<ExtArgs>
            result: $Utils.Optional<PositionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    referrals: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referrals?: boolean | UserCountOutputTypeCountReferralsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReferralsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferralWhereInput
  }


  /**
   * Count Type ReferralCountOutputType
   */

  export type ReferralCountOutputType = {
    statusHistory: number
  }

  export type ReferralCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    statusHistory?: boolean | ReferralCountOutputTypeCountStatusHistoryArgs
  }

  // Custom InputTypes
  /**
   * ReferralCountOutputType without action
   */
  export type ReferralCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralCountOutputType
     */
    select?: ReferralCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReferralCountOutputType without action
   */
  export type ReferralCountOutputTypeCountStatusHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatusLogWhereInput
  }


  /**
   * Count Type PositionCountOutputType
   */

  export type PositionCountOutputType = {
    referrals: number
  }

  export type PositionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referrals?: boolean | PositionCountOutputTypeCountReferralsArgs
  }

  // Custom InputTypes
  /**
   * PositionCountOutputType without action
   */
  export type PositionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PositionCountOutputType
     */
    select?: PositionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PositionCountOutputType without action
   */
  export type PositionCountOutputTypeCountReferralsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferralWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    phone: string | null
    employeeId: string | null
    name: string | null
    department: string | null
    role: string | null
    passwordHash: string | null
    isVerified: boolean | null
    otp: string | null
    otpExpiry: Date | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    phone: string | null
    employeeId: string | null
    name: string | null
    department: string | null
    role: string | null
    passwordHash: string | null
    isVerified: boolean | null
    otp: string | null
    otpExpiry: Date | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    phone: number
    employeeId: number
    name: number
    department: number
    role: number
    passwordHash: number
    isVerified: number
    otp: number
    otpExpiry: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    employeeId?: true
    name?: true
    department?: true
    role?: true
    passwordHash?: true
    isVerified?: true
    otp?: true
    otpExpiry?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    employeeId?: true
    name?: true
    department?: true
    role?: true
    passwordHash?: true
    isVerified?: true
    otp?: true
    otpExpiry?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    employeeId?: true
    name?: true
    department?: true
    role?: true
    passwordHash?: true
    isVerified?: true
    otp?: true
    otpExpiry?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    phone: string
    employeeId: string
    name: string
    department: string | null
    role: string
    passwordHash: string | null
    isVerified: boolean
    otp: string | null
    otpExpiry: Date | null
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phone?: boolean
    employeeId?: boolean
    name?: boolean
    department?: boolean
    role?: boolean
    passwordHash?: boolean
    isVerified?: boolean
    otp?: boolean
    otpExpiry?: boolean
    createdAt?: boolean
    referrals?: boolean | User$referralsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phone?: boolean
    employeeId?: boolean
    name?: boolean
    department?: boolean
    role?: boolean
    passwordHash?: boolean
    isVerified?: boolean
    otp?: boolean
    otpExpiry?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    phone?: boolean
    employeeId?: boolean
    name?: boolean
    department?: boolean
    role?: boolean
    passwordHash?: boolean
    isVerified?: boolean
    otp?: boolean
    otpExpiry?: boolean
    createdAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referrals?: boolean | User$referralsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      referrals: Prisma.$ReferralPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      phone: string
      employeeId: string
      name: string
      department: string | null
      role: string
      passwordHash: string | null
      isVerified: boolean
      otp: string | null
      otpExpiry: Date | null
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    referrals<T extends User$referralsArgs<ExtArgs> = {}>(args?: Subset<T, User$referralsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly employeeId: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly department: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly otp: FieldRef<"User", 'String'>
    readonly otpExpiry: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.referrals
   */
  export type User$referralsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    where?: ReferralWhereInput
    orderBy?: ReferralOrderByWithRelationInput | ReferralOrderByWithRelationInput[]
    cursor?: ReferralWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReferralScalarFieldEnum | ReferralScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model OtpVerification
   */

  export type AggregateOtpVerification = {
    _count: OtpVerificationCountAggregateOutputType | null
    _avg: OtpVerificationAvgAggregateOutputType | null
    _sum: OtpVerificationSumAggregateOutputType | null
    _min: OtpVerificationMinAggregateOutputType | null
    _max: OtpVerificationMaxAggregateOutputType | null
  }

  export type OtpVerificationAvgAggregateOutputType = {
    attempts: number | null
  }

  export type OtpVerificationSumAggregateOutputType = {
    attempts: number | null
  }

  export type OtpVerificationMinAggregateOutputType = {
    id: string | null
    email: string | null
    otpHash: string | null
    expiresAt: Date | null
    attempts: number | null
    used: boolean | null
    createdAt: Date | null
  }

  export type OtpVerificationMaxAggregateOutputType = {
    id: string | null
    email: string | null
    otpHash: string | null
    expiresAt: Date | null
    attempts: number | null
    used: boolean | null
    createdAt: Date | null
  }

  export type OtpVerificationCountAggregateOutputType = {
    id: number
    email: number
    otpHash: number
    expiresAt: number
    attempts: number
    used: number
    createdAt: number
    _all: number
  }


  export type OtpVerificationAvgAggregateInputType = {
    attempts?: true
  }

  export type OtpVerificationSumAggregateInputType = {
    attempts?: true
  }

  export type OtpVerificationMinAggregateInputType = {
    id?: true
    email?: true
    otpHash?: true
    expiresAt?: true
    attempts?: true
    used?: true
    createdAt?: true
  }

  export type OtpVerificationMaxAggregateInputType = {
    id?: true
    email?: true
    otpHash?: true
    expiresAt?: true
    attempts?: true
    used?: true
    createdAt?: true
  }

  export type OtpVerificationCountAggregateInputType = {
    id?: true
    email?: true
    otpHash?: true
    expiresAt?: true
    attempts?: true
    used?: true
    createdAt?: true
    _all?: true
  }

  export type OtpVerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OtpVerification to aggregate.
     */
    where?: OtpVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtpVerifications to fetch.
     */
    orderBy?: OtpVerificationOrderByWithRelationInput | OtpVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OtpVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtpVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtpVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OtpVerifications
    **/
    _count?: true | OtpVerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OtpVerificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OtpVerificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OtpVerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OtpVerificationMaxAggregateInputType
  }

  export type GetOtpVerificationAggregateType<T extends OtpVerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateOtpVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOtpVerification[P]>
      : GetScalarType<T[P], AggregateOtpVerification[P]>
  }




  export type OtpVerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtpVerificationWhereInput
    orderBy?: OtpVerificationOrderByWithAggregationInput | OtpVerificationOrderByWithAggregationInput[]
    by: OtpVerificationScalarFieldEnum[] | OtpVerificationScalarFieldEnum
    having?: OtpVerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OtpVerificationCountAggregateInputType | true
    _avg?: OtpVerificationAvgAggregateInputType
    _sum?: OtpVerificationSumAggregateInputType
    _min?: OtpVerificationMinAggregateInputType
    _max?: OtpVerificationMaxAggregateInputType
  }

  export type OtpVerificationGroupByOutputType = {
    id: string
    email: string
    otpHash: string
    expiresAt: Date
    attempts: number
    used: boolean
    createdAt: Date
    _count: OtpVerificationCountAggregateOutputType | null
    _avg: OtpVerificationAvgAggregateOutputType | null
    _sum: OtpVerificationSumAggregateOutputType | null
    _min: OtpVerificationMinAggregateOutputType | null
    _max: OtpVerificationMaxAggregateOutputType | null
  }

  type GetOtpVerificationGroupByPayload<T extends OtpVerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OtpVerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OtpVerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OtpVerificationGroupByOutputType[P]>
            : GetScalarType<T[P], OtpVerificationGroupByOutputType[P]>
        }
      >
    >


  export type OtpVerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    otpHash?: boolean
    expiresAt?: boolean
    attempts?: boolean
    used?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["otpVerification"]>

  export type OtpVerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    otpHash?: boolean
    expiresAt?: boolean
    attempts?: boolean
    used?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["otpVerification"]>

  export type OtpVerificationSelectScalar = {
    id?: boolean
    email?: boolean
    otpHash?: boolean
    expiresAt?: boolean
    attempts?: boolean
    used?: boolean
    createdAt?: boolean
  }


  export type $OtpVerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OtpVerification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      otpHash: string
      expiresAt: Date
      attempts: number
      used: boolean
      createdAt: Date
    }, ExtArgs["result"]["otpVerification"]>
    composites: {}
  }

  type OtpVerificationGetPayload<S extends boolean | null | undefined | OtpVerificationDefaultArgs> = $Result.GetResult<Prisma.$OtpVerificationPayload, S>

  type OtpVerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OtpVerificationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OtpVerificationCountAggregateInputType | true
    }

  export interface OtpVerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OtpVerification'], meta: { name: 'OtpVerification' } }
    /**
     * Find zero or one OtpVerification that matches the filter.
     * @param {OtpVerificationFindUniqueArgs} args - Arguments to find a OtpVerification
     * @example
     * // Get one OtpVerification
     * const otpVerification = await prisma.otpVerification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OtpVerificationFindUniqueArgs>(args: SelectSubset<T, OtpVerificationFindUniqueArgs<ExtArgs>>): Prisma__OtpVerificationClient<$Result.GetResult<Prisma.$OtpVerificationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OtpVerification that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OtpVerificationFindUniqueOrThrowArgs} args - Arguments to find a OtpVerification
     * @example
     * // Get one OtpVerification
     * const otpVerification = await prisma.otpVerification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OtpVerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, OtpVerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OtpVerificationClient<$Result.GetResult<Prisma.$OtpVerificationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OtpVerification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpVerificationFindFirstArgs} args - Arguments to find a OtpVerification
     * @example
     * // Get one OtpVerification
     * const otpVerification = await prisma.otpVerification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OtpVerificationFindFirstArgs>(args?: SelectSubset<T, OtpVerificationFindFirstArgs<ExtArgs>>): Prisma__OtpVerificationClient<$Result.GetResult<Prisma.$OtpVerificationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OtpVerification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpVerificationFindFirstOrThrowArgs} args - Arguments to find a OtpVerification
     * @example
     * // Get one OtpVerification
     * const otpVerification = await prisma.otpVerification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OtpVerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, OtpVerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OtpVerificationClient<$Result.GetResult<Prisma.$OtpVerificationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OtpVerifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpVerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OtpVerifications
     * const otpVerifications = await prisma.otpVerification.findMany()
     * 
     * // Get first 10 OtpVerifications
     * const otpVerifications = await prisma.otpVerification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const otpVerificationWithIdOnly = await prisma.otpVerification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OtpVerificationFindManyArgs>(args?: SelectSubset<T, OtpVerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpVerificationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OtpVerification.
     * @param {OtpVerificationCreateArgs} args - Arguments to create a OtpVerification.
     * @example
     * // Create one OtpVerification
     * const OtpVerification = await prisma.otpVerification.create({
     *   data: {
     *     // ... data to create a OtpVerification
     *   }
     * })
     * 
     */
    create<T extends OtpVerificationCreateArgs>(args: SelectSubset<T, OtpVerificationCreateArgs<ExtArgs>>): Prisma__OtpVerificationClient<$Result.GetResult<Prisma.$OtpVerificationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OtpVerifications.
     * @param {OtpVerificationCreateManyArgs} args - Arguments to create many OtpVerifications.
     * @example
     * // Create many OtpVerifications
     * const otpVerification = await prisma.otpVerification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OtpVerificationCreateManyArgs>(args?: SelectSubset<T, OtpVerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OtpVerifications and returns the data saved in the database.
     * @param {OtpVerificationCreateManyAndReturnArgs} args - Arguments to create many OtpVerifications.
     * @example
     * // Create many OtpVerifications
     * const otpVerification = await prisma.otpVerification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OtpVerifications and only return the `id`
     * const otpVerificationWithIdOnly = await prisma.otpVerification.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OtpVerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, OtpVerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpVerificationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a OtpVerification.
     * @param {OtpVerificationDeleteArgs} args - Arguments to delete one OtpVerification.
     * @example
     * // Delete one OtpVerification
     * const OtpVerification = await prisma.otpVerification.delete({
     *   where: {
     *     // ... filter to delete one OtpVerification
     *   }
     * })
     * 
     */
    delete<T extends OtpVerificationDeleteArgs>(args: SelectSubset<T, OtpVerificationDeleteArgs<ExtArgs>>): Prisma__OtpVerificationClient<$Result.GetResult<Prisma.$OtpVerificationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OtpVerification.
     * @param {OtpVerificationUpdateArgs} args - Arguments to update one OtpVerification.
     * @example
     * // Update one OtpVerification
     * const otpVerification = await prisma.otpVerification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OtpVerificationUpdateArgs>(args: SelectSubset<T, OtpVerificationUpdateArgs<ExtArgs>>): Prisma__OtpVerificationClient<$Result.GetResult<Prisma.$OtpVerificationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OtpVerifications.
     * @param {OtpVerificationDeleteManyArgs} args - Arguments to filter OtpVerifications to delete.
     * @example
     * // Delete a few OtpVerifications
     * const { count } = await prisma.otpVerification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OtpVerificationDeleteManyArgs>(args?: SelectSubset<T, OtpVerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OtpVerifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpVerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OtpVerifications
     * const otpVerification = await prisma.otpVerification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OtpVerificationUpdateManyArgs>(args: SelectSubset<T, OtpVerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OtpVerification.
     * @param {OtpVerificationUpsertArgs} args - Arguments to update or create a OtpVerification.
     * @example
     * // Update or create a OtpVerification
     * const otpVerification = await prisma.otpVerification.upsert({
     *   create: {
     *     // ... data to create a OtpVerification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OtpVerification we want to update
     *   }
     * })
     */
    upsert<T extends OtpVerificationUpsertArgs>(args: SelectSubset<T, OtpVerificationUpsertArgs<ExtArgs>>): Prisma__OtpVerificationClient<$Result.GetResult<Prisma.$OtpVerificationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OtpVerifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpVerificationCountArgs} args - Arguments to filter OtpVerifications to count.
     * @example
     * // Count the number of OtpVerifications
     * const count = await prisma.otpVerification.count({
     *   where: {
     *     // ... the filter for the OtpVerifications we want to count
     *   }
     * })
    **/
    count<T extends OtpVerificationCountArgs>(
      args?: Subset<T, OtpVerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OtpVerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OtpVerification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpVerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OtpVerificationAggregateArgs>(args: Subset<T, OtpVerificationAggregateArgs>): Prisma.PrismaPromise<GetOtpVerificationAggregateType<T>>

    /**
     * Group by OtpVerification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpVerificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OtpVerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OtpVerificationGroupByArgs['orderBy'] }
        : { orderBy?: OtpVerificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OtpVerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOtpVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OtpVerification model
   */
  readonly fields: OtpVerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OtpVerification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OtpVerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OtpVerification model
   */ 
  interface OtpVerificationFieldRefs {
    readonly id: FieldRef<"OtpVerification", 'String'>
    readonly email: FieldRef<"OtpVerification", 'String'>
    readonly otpHash: FieldRef<"OtpVerification", 'String'>
    readonly expiresAt: FieldRef<"OtpVerification", 'DateTime'>
    readonly attempts: FieldRef<"OtpVerification", 'Int'>
    readonly used: FieldRef<"OtpVerification", 'Boolean'>
    readonly createdAt: FieldRef<"OtpVerification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OtpVerification findUnique
   */
  export type OtpVerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpVerification
     */
    select?: OtpVerificationSelect<ExtArgs> | null
    /**
     * Filter, which OtpVerification to fetch.
     */
    where: OtpVerificationWhereUniqueInput
  }

  /**
   * OtpVerification findUniqueOrThrow
   */
  export type OtpVerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpVerification
     */
    select?: OtpVerificationSelect<ExtArgs> | null
    /**
     * Filter, which OtpVerification to fetch.
     */
    where: OtpVerificationWhereUniqueInput
  }

  /**
   * OtpVerification findFirst
   */
  export type OtpVerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpVerification
     */
    select?: OtpVerificationSelect<ExtArgs> | null
    /**
     * Filter, which OtpVerification to fetch.
     */
    where?: OtpVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtpVerifications to fetch.
     */
    orderBy?: OtpVerificationOrderByWithRelationInput | OtpVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OtpVerifications.
     */
    cursor?: OtpVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtpVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtpVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OtpVerifications.
     */
    distinct?: OtpVerificationScalarFieldEnum | OtpVerificationScalarFieldEnum[]
  }

  /**
   * OtpVerification findFirstOrThrow
   */
  export type OtpVerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpVerification
     */
    select?: OtpVerificationSelect<ExtArgs> | null
    /**
     * Filter, which OtpVerification to fetch.
     */
    where?: OtpVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtpVerifications to fetch.
     */
    orderBy?: OtpVerificationOrderByWithRelationInput | OtpVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OtpVerifications.
     */
    cursor?: OtpVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtpVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtpVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OtpVerifications.
     */
    distinct?: OtpVerificationScalarFieldEnum | OtpVerificationScalarFieldEnum[]
  }

  /**
   * OtpVerification findMany
   */
  export type OtpVerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpVerification
     */
    select?: OtpVerificationSelect<ExtArgs> | null
    /**
     * Filter, which OtpVerifications to fetch.
     */
    where?: OtpVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtpVerifications to fetch.
     */
    orderBy?: OtpVerificationOrderByWithRelationInput | OtpVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OtpVerifications.
     */
    cursor?: OtpVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtpVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtpVerifications.
     */
    skip?: number
    distinct?: OtpVerificationScalarFieldEnum | OtpVerificationScalarFieldEnum[]
  }

  /**
   * OtpVerification create
   */
  export type OtpVerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpVerification
     */
    select?: OtpVerificationSelect<ExtArgs> | null
    /**
     * The data needed to create a OtpVerification.
     */
    data: XOR<OtpVerificationCreateInput, OtpVerificationUncheckedCreateInput>
  }

  /**
   * OtpVerification createMany
   */
  export type OtpVerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OtpVerifications.
     */
    data: OtpVerificationCreateManyInput | OtpVerificationCreateManyInput[]
  }

  /**
   * OtpVerification createManyAndReturn
   */
  export type OtpVerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpVerification
     */
    select?: OtpVerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many OtpVerifications.
     */
    data: OtpVerificationCreateManyInput | OtpVerificationCreateManyInput[]
  }

  /**
   * OtpVerification update
   */
  export type OtpVerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpVerification
     */
    select?: OtpVerificationSelect<ExtArgs> | null
    /**
     * The data needed to update a OtpVerification.
     */
    data: XOR<OtpVerificationUpdateInput, OtpVerificationUncheckedUpdateInput>
    /**
     * Choose, which OtpVerification to update.
     */
    where: OtpVerificationWhereUniqueInput
  }

  /**
   * OtpVerification updateMany
   */
  export type OtpVerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OtpVerifications.
     */
    data: XOR<OtpVerificationUpdateManyMutationInput, OtpVerificationUncheckedUpdateManyInput>
    /**
     * Filter which OtpVerifications to update
     */
    where?: OtpVerificationWhereInput
  }

  /**
   * OtpVerification upsert
   */
  export type OtpVerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpVerification
     */
    select?: OtpVerificationSelect<ExtArgs> | null
    /**
     * The filter to search for the OtpVerification to update in case it exists.
     */
    where: OtpVerificationWhereUniqueInput
    /**
     * In case the OtpVerification found by the `where` argument doesn't exist, create a new OtpVerification with this data.
     */
    create: XOR<OtpVerificationCreateInput, OtpVerificationUncheckedCreateInput>
    /**
     * In case the OtpVerification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OtpVerificationUpdateInput, OtpVerificationUncheckedUpdateInput>
  }

  /**
   * OtpVerification delete
   */
  export type OtpVerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpVerification
     */
    select?: OtpVerificationSelect<ExtArgs> | null
    /**
     * Filter which OtpVerification to delete.
     */
    where: OtpVerificationWhereUniqueInput
  }

  /**
   * OtpVerification deleteMany
   */
  export type OtpVerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OtpVerifications to delete
     */
    where?: OtpVerificationWhereInput
  }

  /**
   * OtpVerification without action
   */
  export type OtpVerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpVerification
     */
    select?: OtpVerificationSelect<ExtArgs> | null
  }


  /**
   * Model EmailLog
   */

  export type AggregateEmailLog = {
    _count: EmailLogCountAggregateOutputType | null
    _min: EmailLogMinAggregateOutputType | null
    _max: EmailLogMaxAggregateOutputType | null
  }

  export type EmailLogMinAggregateOutputType = {
    id: string | null
    to: string | null
    subject: string | null
    body: string | null
    otp: string | null
    sentAt: Date | null
    status: string | null
  }

  export type EmailLogMaxAggregateOutputType = {
    id: string | null
    to: string | null
    subject: string | null
    body: string | null
    otp: string | null
    sentAt: Date | null
    status: string | null
  }

  export type EmailLogCountAggregateOutputType = {
    id: number
    to: number
    subject: number
    body: number
    otp: number
    sentAt: number
    status: number
    _all: number
  }


  export type EmailLogMinAggregateInputType = {
    id?: true
    to?: true
    subject?: true
    body?: true
    otp?: true
    sentAt?: true
    status?: true
  }

  export type EmailLogMaxAggregateInputType = {
    id?: true
    to?: true
    subject?: true
    body?: true
    otp?: true
    sentAt?: true
    status?: true
  }

  export type EmailLogCountAggregateInputType = {
    id?: true
    to?: true
    subject?: true
    body?: true
    otp?: true
    sentAt?: true
    status?: true
    _all?: true
  }

  export type EmailLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailLog to aggregate.
     */
    where?: EmailLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailLogs to fetch.
     */
    orderBy?: EmailLogOrderByWithRelationInput | EmailLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmailLogs
    **/
    _count?: true | EmailLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailLogMaxAggregateInputType
  }

  export type GetEmailLogAggregateType<T extends EmailLogAggregateArgs> = {
        [P in keyof T & keyof AggregateEmailLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmailLog[P]>
      : GetScalarType<T[P], AggregateEmailLog[P]>
  }




  export type EmailLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailLogWhereInput
    orderBy?: EmailLogOrderByWithAggregationInput | EmailLogOrderByWithAggregationInput[]
    by: EmailLogScalarFieldEnum[] | EmailLogScalarFieldEnum
    having?: EmailLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailLogCountAggregateInputType | true
    _min?: EmailLogMinAggregateInputType
    _max?: EmailLogMaxAggregateInputType
  }

  export type EmailLogGroupByOutputType = {
    id: string
    to: string
    subject: string
    body: string
    otp: string | null
    sentAt: Date
    status: string
    _count: EmailLogCountAggregateOutputType | null
    _min: EmailLogMinAggregateOutputType | null
    _max: EmailLogMaxAggregateOutputType | null
  }

  type GetEmailLogGroupByPayload<T extends EmailLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailLogGroupByOutputType[P]>
            : GetScalarType<T[P], EmailLogGroupByOutputType[P]>
        }
      >
    >


  export type EmailLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    to?: boolean
    subject?: boolean
    body?: boolean
    otp?: boolean
    sentAt?: boolean
    status?: boolean
  }, ExtArgs["result"]["emailLog"]>

  export type EmailLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    to?: boolean
    subject?: boolean
    body?: boolean
    otp?: boolean
    sentAt?: boolean
    status?: boolean
  }, ExtArgs["result"]["emailLog"]>

  export type EmailLogSelectScalar = {
    id?: boolean
    to?: boolean
    subject?: boolean
    body?: boolean
    otp?: boolean
    sentAt?: boolean
    status?: boolean
  }


  export type $EmailLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmailLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      to: string
      subject: string
      body: string
      otp: string | null
      sentAt: Date
      status: string
    }, ExtArgs["result"]["emailLog"]>
    composites: {}
  }

  type EmailLogGetPayload<S extends boolean | null | undefined | EmailLogDefaultArgs> = $Result.GetResult<Prisma.$EmailLogPayload, S>

  type EmailLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EmailLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EmailLogCountAggregateInputType | true
    }

  export interface EmailLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmailLog'], meta: { name: 'EmailLog' } }
    /**
     * Find zero or one EmailLog that matches the filter.
     * @param {EmailLogFindUniqueArgs} args - Arguments to find a EmailLog
     * @example
     * // Get one EmailLog
     * const emailLog = await prisma.emailLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailLogFindUniqueArgs>(args: SelectSubset<T, EmailLogFindUniqueArgs<ExtArgs>>): Prisma__EmailLogClient<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one EmailLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EmailLogFindUniqueOrThrowArgs} args - Arguments to find a EmailLog
     * @example
     * // Get one EmailLog
     * const emailLog = await prisma.emailLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailLogFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailLogClient<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first EmailLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailLogFindFirstArgs} args - Arguments to find a EmailLog
     * @example
     * // Get one EmailLog
     * const emailLog = await prisma.emailLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailLogFindFirstArgs>(args?: SelectSubset<T, EmailLogFindFirstArgs<ExtArgs>>): Prisma__EmailLogClient<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first EmailLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailLogFindFirstOrThrowArgs} args - Arguments to find a EmailLog
     * @example
     * // Get one EmailLog
     * const emailLog = await prisma.emailLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailLogFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailLogClient<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more EmailLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmailLogs
     * const emailLogs = await prisma.emailLog.findMany()
     * 
     * // Get first 10 EmailLogs
     * const emailLogs = await prisma.emailLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailLogWithIdOnly = await prisma.emailLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailLogFindManyArgs>(args?: SelectSubset<T, EmailLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a EmailLog.
     * @param {EmailLogCreateArgs} args - Arguments to create a EmailLog.
     * @example
     * // Create one EmailLog
     * const EmailLog = await prisma.emailLog.create({
     *   data: {
     *     // ... data to create a EmailLog
     *   }
     * })
     * 
     */
    create<T extends EmailLogCreateArgs>(args: SelectSubset<T, EmailLogCreateArgs<ExtArgs>>): Prisma__EmailLogClient<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many EmailLogs.
     * @param {EmailLogCreateManyArgs} args - Arguments to create many EmailLogs.
     * @example
     * // Create many EmailLogs
     * const emailLog = await prisma.emailLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailLogCreateManyArgs>(args?: SelectSubset<T, EmailLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmailLogs and returns the data saved in the database.
     * @param {EmailLogCreateManyAndReturnArgs} args - Arguments to create many EmailLogs.
     * @example
     * // Create many EmailLogs
     * const emailLog = await prisma.emailLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmailLogs and only return the `id`
     * const emailLogWithIdOnly = await prisma.emailLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailLogCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a EmailLog.
     * @param {EmailLogDeleteArgs} args - Arguments to delete one EmailLog.
     * @example
     * // Delete one EmailLog
     * const EmailLog = await prisma.emailLog.delete({
     *   where: {
     *     // ... filter to delete one EmailLog
     *   }
     * })
     * 
     */
    delete<T extends EmailLogDeleteArgs>(args: SelectSubset<T, EmailLogDeleteArgs<ExtArgs>>): Prisma__EmailLogClient<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one EmailLog.
     * @param {EmailLogUpdateArgs} args - Arguments to update one EmailLog.
     * @example
     * // Update one EmailLog
     * const emailLog = await prisma.emailLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailLogUpdateArgs>(args: SelectSubset<T, EmailLogUpdateArgs<ExtArgs>>): Prisma__EmailLogClient<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more EmailLogs.
     * @param {EmailLogDeleteManyArgs} args - Arguments to filter EmailLogs to delete.
     * @example
     * // Delete a few EmailLogs
     * const { count } = await prisma.emailLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailLogDeleteManyArgs>(args?: SelectSubset<T, EmailLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmailLogs
     * const emailLog = await prisma.emailLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailLogUpdateManyArgs>(args: SelectSubset<T, EmailLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EmailLog.
     * @param {EmailLogUpsertArgs} args - Arguments to update or create a EmailLog.
     * @example
     * // Update or create a EmailLog
     * const emailLog = await prisma.emailLog.upsert({
     *   create: {
     *     // ... data to create a EmailLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmailLog we want to update
     *   }
     * })
     */
    upsert<T extends EmailLogUpsertArgs>(args: SelectSubset<T, EmailLogUpsertArgs<ExtArgs>>): Prisma__EmailLogClient<$Result.GetResult<Prisma.$EmailLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of EmailLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailLogCountArgs} args - Arguments to filter EmailLogs to count.
     * @example
     * // Count the number of EmailLogs
     * const count = await prisma.emailLog.count({
     *   where: {
     *     // ... the filter for the EmailLogs we want to count
     *   }
     * })
    **/
    count<T extends EmailLogCountArgs>(
      args?: Subset<T, EmailLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmailLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmailLogAggregateArgs>(args: Subset<T, EmailLogAggregateArgs>): Prisma.PrismaPromise<GetEmailLogAggregateType<T>>

    /**
     * Group by EmailLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmailLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailLogGroupByArgs['orderBy'] }
        : { orderBy?: EmailLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmailLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmailLog model
   */
  readonly fields: EmailLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmailLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EmailLog model
   */ 
  interface EmailLogFieldRefs {
    readonly id: FieldRef<"EmailLog", 'String'>
    readonly to: FieldRef<"EmailLog", 'String'>
    readonly subject: FieldRef<"EmailLog", 'String'>
    readonly body: FieldRef<"EmailLog", 'String'>
    readonly otp: FieldRef<"EmailLog", 'String'>
    readonly sentAt: FieldRef<"EmailLog", 'DateTime'>
    readonly status: FieldRef<"EmailLog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EmailLog findUnique
   */
  export type EmailLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
    /**
     * Filter, which EmailLog to fetch.
     */
    where: EmailLogWhereUniqueInput
  }

  /**
   * EmailLog findUniqueOrThrow
   */
  export type EmailLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
    /**
     * Filter, which EmailLog to fetch.
     */
    where: EmailLogWhereUniqueInput
  }

  /**
   * EmailLog findFirst
   */
  export type EmailLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
    /**
     * Filter, which EmailLog to fetch.
     */
    where?: EmailLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailLogs to fetch.
     */
    orderBy?: EmailLogOrderByWithRelationInput | EmailLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailLogs.
     */
    cursor?: EmailLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailLogs.
     */
    distinct?: EmailLogScalarFieldEnum | EmailLogScalarFieldEnum[]
  }

  /**
   * EmailLog findFirstOrThrow
   */
  export type EmailLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
    /**
     * Filter, which EmailLog to fetch.
     */
    where?: EmailLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailLogs to fetch.
     */
    orderBy?: EmailLogOrderByWithRelationInput | EmailLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailLogs.
     */
    cursor?: EmailLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailLogs.
     */
    distinct?: EmailLogScalarFieldEnum | EmailLogScalarFieldEnum[]
  }

  /**
   * EmailLog findMany
   */
  export type EmailLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
    /**
     * Filter, which EmailLogs to fetch.
     */
    where?: EmailLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailLogs to fetch.
     */
    orderBy?: EmailLogOrderByWithRelationInput | EmailLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmailLogs.
     */
    cursor?: EmailLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailLogs.
     */
    skip?: number
    distinct?: EmailLogScalarFieldEnum | EmailLogScalarFieldEnum[]
  }

  /**
   * EmailLog create
   */
  export type EmailLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
    /**
     * The data needed to create a EmailLog.
     */
    data: XOR<EmailLogCreateInput, EmailLogUncheckedCreateInput>
  }

  /**
   * EmailLog createMany
   */
  export type EmailLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmailLogs.
     */
    data: EmailLogCreateManyInput | EmailLogCreateManyInput[]
  }

  /**
   * EmailLog createManyAndReturn
   */
  export type EmailLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many EmailLogs.
     */
    data: EmailLogCreateManyInput | EmailLogCreateManyInput[]
  }

  /**
   * EmailLog update
   */
  export type EmailLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
    /**
     * The data needed to update a EmailLog.
     */
    data: XOR<EmailLogUpdateInput, EmailLogUncheckedUpdateInput>
    /**
     * Choose, which EmailLog to update.
     */
    where: EmailLogWhereUniqueInput
  }

  /**
   * EmailLog updateMany
   */
  export type EmailLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmailLogs.
     */
    data: XOR<EmailLogUpdateManyMutationInput, EmailLogUncheckedUpdateManyInput>
    /**
     * Filter which EmailLogs to update
     */
    where?: EmailLogWhereInput
  }

  /**
   * EmailLog upsert
   */
  export type EmailLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
    /**
     * The filter to search for the EmailLog to update in case it exists.
     */
    where: EmailLogWhereUniqueInput
    /**
     * In case the EmailLog found by the `where` argument doesn't exist, create a new EmailLog with this data.
     */
    create: XOR<EmailLogCreateInput, EmailLogUncheckedCreateInput>
    /**
     * In case the EmailLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailLogUpdateInput, EmailLogUncheckedUpdateInput>
  }

  /**
   * EmailLog delete
   */
  export type EmailLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
    /**
     * Filter which EmailLog to delete.
     */
    where: EmailLogWhereUniqueInput
  }

  /**
   * EmailLog deleteMany
   */
  export type EmailLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailLogs to delete
     */
    where?: EmailLogWhereInput
  }

  /**
   * EmailLog without action
   */
  export type EmailLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailLog
     */
    select?: EmailLogSelect<ExtArgs> | null
  }


  /**
   * Model Referral
   */

  export type AggregateReferral = {
    _count: ReferralCountAggregateOutputType | null
    _min: ReferralMinAggregateOutputType | null
    _max: ReferralMaxAggregateOutputType | null
  }

  export type ReferralMinAggregateOutputType = {
    id: string | null
    refCode: string | null
    candidateName: string | null
    candidateEmail: string | null
    candidatePhone: string | null
    resumeUrl: string | null
    notes: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    referredById: string | null
    positionId: string | null
  }

  export type ReferralMaxAggregateOutputType = {
    id: string | null
    refCode: string | null
    candidateName: string | null
    candidateEmail: string | null
    candidatePhone: string | null
    resumeUrl: string | null
    notes: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    referredById: string | null
    positionId: string | null
  }

  export type ReferralCountAggregateOutputType = {
    id: number
    refCode: number
    candidateName: number
    candidateEmail: number
    candidatePhone: number
    resumeUrl: number
    notes: number
    status: number
    createdAt: number
    updatedAt: number
    referredById: number
    positionId: number
    _all: number
  }


  export type ReferralMinAggregateInputType = {
    id?: true
    refCode?: true
    candidateName?: true
    candidateEmail?: true
    candidatePhone?: true
    resumeUrl?: true
    notes?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    referredById?: true
    positionId?: true
  }

  export type ReferralMaxAggregateInputType = {
    id?: true
    refCode?: true
    candidateName?: true
    candidateEmail?: true
    candidatePhone?: true
    resumeUrl?: true
    notes?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    referredById?: true
    positionId?: true
  }

  export type ReferralCountAggregateInputType = {
    id?: true
    refCode?: true
    candidateName?: true
    candidateEmail?: true
    candidatePhone?: true
    resumeUrl?: true
    notes?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    referredById?: true
    positionId?: true
    _all?: true
  }

  export type ReferralAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Referral to aggregate.
     */
    where?: ReferralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Referrals to fetch.
     */
    orderBy?: ReferralOrderByWithRelationInput | ReferralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReferralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Referrals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Referrals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Referrals
    **/
    _count?: true | ReferralCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReferralMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReferralMaxAggregateInputType
  }

  export type GetReferralAggregateType<T extends ReferralAggregateArgs> = {
        [P in keyof T & keyof AggregateReferral]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReferral[P]>
      : GetScalarType<T[P], AggregateReferral[P]>
  }




  export type ReferralGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferralWhereInput
    orderBy?: ReferralOrderByWithAggregationInput | ReferralOrderByWithAggregationInput[]
    by: ReferralScalarFieldEnum[] | ReferralScalarFieldEnum
    having?: ReferralScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReferralCountAggregateInputType | true
    _min?: ReferralMinAggregateInputType
    _max?: ReferralMaxAggregateInputType
  }

  export type ReferralGroupByOutputType = {
    id: string
    refCode: string
    candidateName: string
    candidateEmail: string
    candidatePhone: string
    resumeUrl: string | null
    notes: string | null
    status: string
    createdAt: Date
    updatedAt: Date
    referredById: string
    positionId: string
    _count: ReferralCountAggregateOutputType | null
    _min: ReferralMinAggregateOutputType | null
    _max: ReferralMaxAggregateOutputType | null
  }

  type GetReferralGroupByPayload<T extends ReferralGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReferralGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReferralGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReferralGroupByOutputType[P]>
            : GetScalarType<T[P], ReferralGroupByOutputType[P]>
        }
      >
    >


  export type ReferralSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    refCode?: boolean
    candidateName?: boolean
    candidateEmail?: boolean
    candidatePhone?: boolean
    resumeUrl?: boolean
    notes?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    referredById?: boolean
    positionId?: boolean
    position?: boolean | PositionDefaultArgs<ExtArgs>
    referredBy?: boolean | UserDefaultArgs<ExtArgs>
    statusHistory?: boolean | Referral$statusHistoryArgs<ExtArgs>
    _count?: boolean | ReferralCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referral"]>

  export type ReferralSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    refCode?: boolean
    candidateName?: boolean
    candidateEmail?: boolean
    candidatePhone?: boolean
    resumeUrl?: boolean
    notes?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    referredById?: boolean
    positionId?: boolean
    position?: boolean | PositionDefaultArgs<ExtArgs>
    referredBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referral"]>

  export type ReferralSelectScalar = {
    id?: boolean
    refCode?: boolean
    candidateName?: boolean
    candidateEmail?: boolean
    candidatePhone?: boolean
    resumeUrl?: boolean
    notes?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    referredById?: boolean
    positionId?: boolean
  }

  export type ReferralInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    position?: boolean | PositionDefaultArgs<ExtArgs>
    referredBy?: boolean | UserDefaultArgs<ExtArgs>
    statusHistory?: boolean | Referral$statusHistoryArgs<ExtArgs>
    _count?: boolean | ReferralCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReferralIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    position?: boolean | PositionDefaultArgs<ExtArgs>
    referredBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReferralPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Referral"
    objects: {
      position: Prisma.$PositionPayload<ExtArgs>
      referredBy: Prisma.$UserPayload<ExtArgs>
      statusHistory: Prisma.$StatusLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      refCode: string
      candidateName: string
      candidateEmail: string
      candidatePhone: string
      resumeUrl: string | null
      notes: string | null
      status: string
      createdAt: Date
      updatedAt: Date
      referredById: string
      positionId: string
    }, ExtArgs["result"]["referral"]>
    composites: {}
  }

  type ReferralGetPayload<S extends boolean | null | undefined | ReferralDefaultArgs> = $Result.GetResult<Prisma.$ReferralPayload, S>

  type ReferralCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReferralFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReferralCountAggregateInputType | true
    }

  export interface ReferralDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Referral'], meta: { name: 'Referral' } }
    /**
     * Find zero or one Referral that matches the filter.
     * @param {ReferralFindUniqueArgs} args - Arguments to find a Referral
     * @example
     * // Get one Referral
     * const referral = await prisma.referral.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReferralFindUniqueArgs>(args: SelectSubset<T, ReferralFindUniqueArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Referral that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReferralFindUniqueOrThrowArgs} args - Arguments to find a Referral
     * @example
     * // Get one Referral
     * const referral = await prisma.referral.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReferralFindUniqueOrThrowArgs>(args: SelectSubset<T, ReferralFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Referral that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralFindFirstArgs} args - Arguments to find a Referral
     * @example
     * // Get one Referral
     * const referral = await prisma.referral.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReferralFindFirstArgs>(args?: SelectSubset<T, ReferralFindFirstArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Referral that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralFindFirstOrThrowArgs} args - Arguments to find a Referral
     * @example
     * // Get one Referral
     * const referral = await prisma.referral.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReferralFindFirstOrThrowArgs>(args?: SelectSubset<T, ReferralFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Referrals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Referrals
     * const referrals = await prisma.referral.findMany()
     * 
     * // Get first 10 Referrals
     * const referrals = await prisma.referral.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const referralWithIdOnly = await prisma.referral.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReferralFindManyArgs>(args?: SelectSubset<T, ReferralFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Referral.
     * @param {ReferralCreateArgs} args - Arguments to create a Referral.
     * @example
     * // Create one Referral
     * const Referral = await prisma.referral.create({
     *   data: {
     *     // ... data to create a Referral
     *   }
     * })
     * 
     */
    create<T extends ReferralCreateArgs>(args: SelectSubset<T, ReferralCreateArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Referrals.
     * @param {ReferralCreateManyArgs} args - Arguments to create many Referrals.
     * @example
     * // Create many Referrals
     * const referral = await prisma.referral.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReferralCreateManyArgs>(args?: SelectSubset<T, ReferralCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Referrals and returns the data saved in the database.
     * @param {ReferralCreateManyAndReturnArgs} args - Arguments to create many Referrals.
     * @example
     * // Create many Referrals
     * const referral = await prisma.referral.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Referrals and only return the `id`
     * const referralWithIdOnly = await prisma.referral.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReferralCreateManyAndReturnArgs>(args?: SelectSubset<T, ReferralCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Referral.
     * @param {ReferralDeleteArgs} args - Arguments to delete one Referral.
     * @example
     * // Delete one Referral
     * const Referral = await prisma.referral.delete({
     *   where: {
     *     // ... filter to delete one Referral
     *   }
     * })
     * 
     */
    delete<T extends ReferralDeleteArgs>(args: SelectSubset<T, ReferralDeleteArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Referral.
     * @param {ReferralUpdateArgs} args - Arguments to update one Referral.
     * @example
     * // Update one Referral
     * const referral = await prisma.referral.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReferralUpdateArgs>(args: SelectSubset<T, ReferralUpdateArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Referrals.
     * @param {ReferralDeleteManyArgs} args - Arguments to filter Referrals to delete.
     * @example
     * // Delete a few Referrals
     * const { count } = await prisma.referral.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReferralDeleteManyArgs>(args?: SelectSubset<T, ReferralDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Referrals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Referrals
     * const referral = await prisma.referral.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReferralUpdateManyArgs>(args: SelectSubset<T, ReferralUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Referral.
     * @param {ReferralUpsertArgs} args - Arguments to update or create a Referral.
     * @example
     * // Update or create a Referral
     * const referral = await prisma.referral.upsert({
     *   create: {
     *     // ... data to create a Referral
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Referral we want to update
     *   }
     * })
     */
    upsert<T extends ReferralUpsertArgs>(args: SelectSubset<T, ReferralUpsertArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Referrals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralCountArgs} args - Arguments to filter Referrals to count.
     * @example
     * // Count the number of Referrals
     * const count = await prisma.referral.count({
     *   where: {
     *     // ... the filter for the Referrals we want to count
     *   }
     * })
    **/
    count<T extends ReferralCountArgs>(
      args?: Subset<T, ReferralCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReferralCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Referral.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReferralAggregateArgs>(args: Subset<T, ReferralAggregateArgs>): Prisma.PrismaPromise<GetReferralAggregateType<T>>

    /**
     * Group by Referral.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReferralGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReferralGroupByArgs['orderBy'] }
        : { orderBy?: ReferralGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReferralGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReferralGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Referral model
   */
  readonly fields: ReferralFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Referral.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReferralClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    position<T extends PositionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PositionDefaultArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    referredBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    statusHistory<T extends Referral$statusHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Referral$statusHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusLogPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Referral model
   */ 
  interface ReferralFieldRefs {
    readonly id: FieldRef<"Referral", 'String'>
    readonly refCode: FieldRef<"Referral", 'String'>
    readonly candidateName: FieldRef<"Referral", 'String'>
    readonly candidateEmail: FieldRef<"Referral", 'String'>
    readonly candidatePhone: FieldRef<"Referral", 'String'>
    readonly resumeUrl: FieldRef<"Referral", 'String'>
    readonly notes: FieldRef<"Referral", 'String'>
    readonly status: FieldRef<"Referral", 'String'>
    readonly createdAt: FieldRef<"Referral", 'DateTime'>
    readonly updatedAt: FieldRef<"Referral", 'DateTime'>
    readonly referredById: FieldRef<"Referral", 'String'>
    readonly positionId: FieldRef<"Referral", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Referral findUnique
   */
  export type ReferralFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * Filter, which Referral to fetch.
     */
    where: ReferralWhereUniqueInput
  }

  /**
   * Referral findUniqueOrThrow
   */
  export type ReferralFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * Filter, which Referral to fetch.
     */
    where: ReferralWhereUniqueInput
  }

  /**
   * Referral findFirst
   */
  export type ReferralFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * Filter, which Referral to fetch.
     */
    where?: ReferralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Referrals to fetch.
     */
    orderBy?: ReferralOrderByWithRelationInput | ReferralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Referrals.
     */
    cursor?: ReferralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Referrals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Referrals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Referrals.
     */
    distinct?: ReferralScalarFieldEnum | ReferralScalarFieldEnum[]
  }

  /**
   * Referral findFirstOrThrow
   */
  export type ReferralFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * Filter, which Referral to fetch.
     */
    where?: ReferralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Referrals to fetch.
     */
    orderBy?: ReferralOrderByWithRelationInput | ReferralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Referrals.
     */
    cursor?: ReferralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Referrals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Referrals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Referrals.
     */
    distinct?: ReferralScalarFieldEnum | ReferralScalarFieldEnum[]
  }

  /**
   * Referral findMany
   */
  export type ReferralFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * Filter, which Referrals to fetch.
     */
    where?: ReferralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Referrals to fetch.
     */
    orderBy?: ReferralOrderByWithRelationInput | ReferralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Referrals.
     */
    cursor?: ReferralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Referrals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Referrals.
     */
    skip?: number
    distinct?: ReferralScalarFieldEnum | ReferralScalarFieldEnum[]
  }

  /**
   * Referral create
   */
  export type ReferralCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * The data needed to create a Referral.
     */
    data: XOR<ReferralCreateInput, ReferralUncheckedCreateInput>
  }

  /**
   * Referral createMany
   */
  export type ReferralCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Referrals.
     */
    data: ReferralCreateManyInput | ReferralCreateManyInput[]
  }

  /**
   * Referral createManyAndReturn
   */
  export type ReferralCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Referrals.
     */
    data: ReferralCreateManyInput | ReferralCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Referral update
   */
  export type ReferralUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * The data needed to update a Referral.
     */
    data: XOR<ReferralUpdateInput, ReferralUncheckedUpdateInput>
    /**
     * Choose, which Referral to update.
     */
    where: ReferralWhereUniqueInput
  }

  /**
   * Referral updateMany
   */
  export type ReferralUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Referrals.
     */
    data: XOR<ReferralUpdateManyMutationInput, ReferralUncheckedUpdateManyInput>
    /**
     * Filter which Referrals to update
     */
    where?: ReferralWhereInput
  }

  /**
   * Referral upsert
   */
  export type ReferralUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * The filter to search for the Referral to update in case it exists.
     */
    where: ReferralWhereUniqueInput
    /**
     * In case the Referral found by the `where` argument doesn't exist, create a new Referral with this data.
     */
    create: XOR<ReferralCreateInput, ReferralUncheckedCreateInput>
    /**
     * In case the Referral was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReferralUpdateInput, ReferralUncheckedUpdateInput>
  }

  /**
   * Referral delete
   */
  export type ReferralDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    /**
     * Filter which Referral to delete.
     */
    where: ReferralWhereUniqueInput
  }

  /**
   * Referral deleteMany
   */
  export type ReferralDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Referrals to delete
     */
    where?: ReferralWhereInput
  }

  /**
   * Referral.statusHistory
   */
  export type Referral$statusHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusLog
     */
    select?: StatusLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusLogInclude<ExtArgs> | null
    where?: StatusLogWhereInput
    orderBy?: StatusLogOrderByWithRelationInput | StatusLogOrderByWithRelationInput[]
    cursor?: StatusLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StatusLogScalarFieldEnum | StatusLogScalarFieldEnum[]
  }

  /**
   * Referral without action
   */
  export type ReferralDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
  }


  /**
   * Model StatusLog
   */

  export type AggregateStatusLog = {
    _count: StatusLogCountAggregateOutputType | null
    _min: StatusLogMinAggregateOutputType | null
    _max: StatusLogMaxAggregateOutputType | null
  }

  export type StatusLogMinAggregateOutputType = {
    id: string | null
    fromStatus: string | null
    toStatus: string | null
    note: string | null
    createdAt: Date | null
    referralId: string | null
    changedBy: string | null
  }

  export type StatusLogMaxAggregateOutputType = {
    id: string | null
    fromStatus: string | null
    toStatus: string | null
    note: string | null
    createdAt: Date | null
    referralId: string | null
    changedBy: string | null
  }

  export type StatusLogCountAggregateOutputType = {
    id: number
    fromStatus: number
    toStatus: number
    note: number
    createdAt: number
    referralId: number
    changedBy: number
    _all: number
  }


  export type StatusLogMinAggregateInputType = {
    id?: true
    fromStatus?: true
    toStatus?: true
    note?: true
    createdAt?: true
    referralId?: true
    changedBy?: true
  }

  export type StatusLogMaxAggregateInputType = {
    id?: true
    fromStatus?: true
    toStatus?: true
    note?: true
    createdAt?: true
    referralId?: true
    changedBy?: true
  }

  export type StatusLogCountAggregateInputType = {
    id?: true
    fromStatus?: true
    toStatus?: true
    note?: true
    createdAt?: true
    referralId?: true
    changedBy?: true
    _all?: true
  }

  export type StatusLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StatusLog to aggregate.
     */
    where?: StatusLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusLogs to fetch.
     */
    orderBy?: StatusLogOrderByWithRelationInput | StatusLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StatusLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StatusLogs
    **/
    _count?: true | StatusLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatusLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatusLogMaxAggregateInputType
  }

  export type GetStatusLogAggregateType<T extends StatusLogAggregateArgs> = {
        [P in keyof T & keyof AggregateStatusLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStatusLog[P]>
      : GetScalarType<T[P], AggregateStatusLog[P]>
  }




  export type StatusLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatusLogWhereInput
    orderBy?: StatusLogOrderByWithAggregationInput | StatusLogOrderByWithAggregationInput[]
    by: StatusLogScalarFieldEnum[] | StatusLogScalarFieldEnum
    having?: StatusLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatusLogCountAggregateInputType | true
    _min?: StatusLogMinAggregateInputType
    _max?: StatusLogMaxAggregateInputType
  }

  export type StatusLogGroupByOutputType = {
    id: string
    fromStatus: string
    toStatus: string
    note: string | null
    createdAt: Date
    referralId: string
    changedBy: string
    _count: StatusLogCountAggregateOutputType | null
    _min: StatusLogMinAggregateOutputType | null
    _max: StatusLogMaxAggregateOutputType | null
  }

  type GetStatusLogGroupByPayload<T extends StatusLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StatusLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatusLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatusLogGroupByOutputType[P]>
            : GetScalarType<T[P], StatusLogGroupByOutputType[P]>
        }
      >
    >


  export type StatusLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromStatus?: boolean
    toStatus?: boolean
    note?: boolean
    createdAt?: boolean
    referralId?: boolean
    changedBy?: boolean
    referral?: boolean | ReferralDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["statusLog"]>

  export type StatusLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromStatus?: boolean
    toStatus?: boolean
    note?: boolean
    createdAt?: boolean
    referralId?: boolean
    changedBy?: boolean
    referral?: boolean | ReferralDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["statusLog"]>

  export type StatusLogSelectScalar = {
    id?: boolean
    fromStatus?: boolean
    toStatus?: boolean
    note?: boolean
    createdAt?: boolean
    referralId?: boolean
    changedBy?: boolean
  }

  export type StatusLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referral?: boolean | ReferralDefaultArgs<ExtArgs>
  }
  export type StatusLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referral?: boolean | ReferralDefaultArgs<ExtArgs>
  }

  export type $StatusLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StatusLog"
    objects: {
      referral: Prisma.$ReferralPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fromStatus: string
      toStatus: string
      note: string | null
      createdAt: Date
      referralId: string
      changedBy: string
    }, ExtArgs["result"]["statusLog"]>
    composites: {}
  }

  type StatusLogGetPayload<S extends boolean | null | undefined | StatusLogDefaultArgs> = $Result.GetResult<Prisma.$StatusLogPayload, S>

  type StatusLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StatusLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StatusLogCountAggregateInputType | true
    }

  export interface StatusLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StatusLog'], meta: { name: 'StatusLog' } }
    /**
     * Find zero or one StatusLog that matches the filter.
     * @param {StatusLogFindUniqueArgs} args - Arguments to find a StatusLog
     * @example
     * // Get one StatusLog
     * const statusLog = await prisma.statusLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StatusLogFindUniqueArgs>(args: SelectSubset<T, StatusLogFindUniqueArgs<ExtArgs>>): Prisma__StatusLogClient<$Result.GetResult<Prisma.$StatusLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one StatusLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StatusLogFindUniqueOrThrowArgs} args - Arguments to find a StatusLog
     * @example
     * // Get one StatusLog
     * const statusLog = await prisma.statusLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StatusLogFindUniqueOrThrowArgs>(args: SelectSubset<T, StatusLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StatusLogClient<$Result.GetResult<Prisma.$StatusLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first StatusLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusLogFindFirstArgs} args - Arguments to find a StatusLog
     * @example
     * // Get one StatusLog
     * const statusLog = await prisma.statusLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StatusLogFindFirstArgs>(args?: SelectSubset<T, StatusLogFindFirstArgs<ExtArgs>>): Prisma__StatusLogClient<$Result.GetResult<Prisma.$StatusLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first StatusLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusLogFindFirstOrThrowArgs} args - Arguments to find a StatusLog
     * @example
     * // Get one StatusLog
     * const statusLog = await prisma.statusLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StatusLogFindFirstOrThrowArgs>(args?: SelectSubset<T, StatusLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__StatusLogClient<$Result.GetResult<Prisma.$StatusLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more StatusLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StatusLogs
     * const statusLogs = await prisma.statusLog.findMany()
     * 
     * // Get first 10 StatusLogs
     * const statusLogs = await prisma.statusLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const statusLogWithIdOnly = await prisma.statusLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StatusLogFindManyArgs>(args?: SelectSubset<T, StatusLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a StatusLog.
     * @param {StatusLogCreateArgs} args - Arguments to create a StatusLog.
     * @example
     * // Create one StatusLog
     * const StatusLog = await prisma.statusLog.create({
     *   data: {
     *     // ... data to create a StatusLog
     *   }
     * })
     * 
     */
    create<T extends StatusLogCreateArgs>(args: SelectSubset<T, StatusLogCreateArgs<ExtArgs>>): Prisma__StatusLogClient<$Result.GetResult<Prisma.$StatusLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many StatusLogs.
     * @param {StatusLogCreateManyArgs} args - Arguments to create many StatusLogs.
     * @example
     * // Create many StatusLogs
     * const statusLog = await prisma.statusLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StatusLogCreateManyArgs>(args?: SelectSubset<T, StatusLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StatusLogs and returns the data saved in the database.
     * @param {StatusLogCreateManyAndReturnArgs} args - Arguments to create many StatusLogs.
     * @example
     * // Create many StatusLogs
     * const statusLog = await prisma.statusLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StatusLogs and only return the `id`
     * const statusLogWithIdOnly = await prisma.statusLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StatusLogCreateManyAndReturnArgs>(args?: SelectSubset<T, StatusLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a StatusLog.
     * @param {StatusLogDeleteArgs} args - Arguments to delete one StatusLog.
     * @example
     * // Delete one StatusLog
     * const StatusLog = await prisma.statusLog.delete({
     *   where: {
     *     // ... filter to delete one StatusLog
     *   }
     * })
     * 
     */
    delete<T extends StatusLogDeleteArgs>(args: SelectSubset<T, StatusLogDeleteArgs<ExtArgs>>): Prisma__StatusLogClient<$Result.GetResult<Prisma.$StatusLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one StatusLog.
     * @param {StatusLogUpdateArgs} args - Arguments to update one StatusLog.
     * @example
     * // Update one StatusLog
     * const statusLog = await prisma.statusLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StatusLogUpdateArgs>(args: SelectSubset<T, StatusLogUpdateArgs<ExtArgs>>): Prisma__StatusLogClient<$Result.GetResult<Prisma.$StatusLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more StatusLogs.
     * @param {StatusLogDeleteManyArgs} args - Arguments to filter StatusLogs to delete.
     * @example
     * // Delete a few StatusLogs
     * const { count } = await prisma.statusLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StatusLogDeleteManyArgs>(args?: SelectSubset<T, StatusLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StatusLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StatusLogs
     * const statusLog = await prisma.statusLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StatusLogUpdateManyArgs>(args: SelectSubset<T, StatusLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StatusLog.
     * @param {StatusLogUpsertArgs} args - Arguments to update or create a StatusLog.
     * @example
     * // Update or create a StatusLog
     * const statusLog = await prisma.statusLog.upsert({
     *   create: {
     *     // ... data to create a StatusLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StatusLog we want to update
     *   }
     * })
     */
    upsert<T extends StatusLogUpsertArgs>(args: SelectSubset<T, StatusLogUpsertArgs<ExtArgs>>): Prisma__StatusLogClient<$Result.GetResult<Prisma.$StatusLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of StatusLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusLogCountArgs} args - Arguments to filter StatusLogs to count.
     * @example
     * // Count the number of StatusLogs
     * const count = await prisma.statusLog.count({
     *   where: {
     *     // ... the filter for the StatusLogs we want to count
     *   }
     * })
    **/
    count<T extends StatusLogCountArgs>(
      args?: Subset<T, StatusLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatusLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StatusLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StatusLogAggregateArgs>(args: Subset<T, StatusLogAggregateArgs>): Prisma.PrismaPromise<GetStatusLogAggregateType<T>>

    /**
     * Group by StatusLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StatusLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StatusLogGroupByArgs['orderBy'] }
        : { orderBy?: StatusLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StatusLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatusLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StatusLog model
   */
  readonly fields: StatusLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StatusLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StatusLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    referral<T extends ReferralDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReferralDefaultArgs<ExtArgs>>): Prisma__ReferralClient<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StatusLog model
   */ 
  interface StatusLogFieldRefs {
    readonly id: FieldRef<"StatusLog", 'String'>
    readonly fromStatus: FieldRef<"StatusLog", 'String'>
    readonly toStatus: FieldRef<"StatusLog", 'String'>
    readonly note: FieldRef<"StatusLog", 'String'>
    readonly createdAt: FieldRef<"StatusLog", 'DateTime'>
    readonly referralId: FieldRef<"StatusLog", 'String'>
    readonly changedBy: FieldRef<"StatusLog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StatusLog findUnique
   */
  export type StatusLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusLog
     */
    select?: StatusLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusLogInclude<ExtArgs> | null
    /**
     * Filter, which StatusLog to fetch.
     */
    where: StatusLogWhereUniqueInput
  }

  /**
   * StatusLog findUniqueOrThrow
   */
  export type StatusLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusLog
     */
    select?: StatusLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusLogInclude<ExtArgs> | null
    /**
     * Filter, which StatusLog to fetch.
     */
    where: StatusLogWhereUniqueInput
  }

  /**
   * StatusLog findFirst
   */
  export type StatusLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusLog
     */
    select?: StatusLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusLogInclude<ExtArgs> | null
    /**
     * Filter, which StatusLog to fetch.
     */
    where?: StatusLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusLogs to fetch.
     */
    orderBy?: StatusLogOrderByWithRelationInput | StatusLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StatusLogs.
     */
    cursor?: StatusLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StatusLogs.
     */
    distinct?: StatusLogScalarFieldEnum | StatusLogScalarFieldEnum[]
  }

  /**
   * StatusLog findFirstOrThrow
   */
  export type StatusLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusLog
     */
    select?: StatusLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusLogInclude<ExtArgs> | null
    /**
     * Filter, which StatusLog to fetch.
     */
    where?: StatusLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusLogs to fetch.
     */
    orderBy?: StatusLogOrderByWithRelationInput | StatusLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StatusLogs.
     */
    cursor?: StatusLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StatusLogs.
     */
    distinct?: StatusLogScalarFieldEnum | StatusLogScalarFieldEnum[]
  }

  /**
   * StatusLog findMany
   */
  export type StatusLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusLog
     */
    select?: StatusLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusLogInclude<ExtArgs> | null
    /**
     * Filter, which StatusLogs to fetch.
     */
    where?: StatusLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StatusLogs to fetch.
     */
    orderBy?: StatusLogOrderByWithRelationInput | StatusLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StatusLogs.
     */
    cursor?: StatusLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StatusLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StatusLogs.
     */
    skip?: number
    distinct?: StatusLogScalarFieldEnum | StatusLogScalarFieldEnum[]
  }

  /**
   * StatusLog create
   */
  export type StatusLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusLog
     */
    select?: StatusLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusLogInclude<ExtArgs> | null
    /**
     * The data needed to create a StatusLog.
     */
    data: XOR<StatusLogCreateInput, StatusLogUncheckedCreateInput>
  }

  /**
   * StatusLog createMany
   */
  export type StatusLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StatusLogs.
     */
    data: StatusLogCreateManyInput | StatusLogCreateManyInput[]
  }

  /**
   * StatusLog createManyAndReturn
   */
  export type StatusLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusLog
     */
    select?: StatusLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many StatusLogs.
     */
    data: StatusLogCreateManyInput | StatusLogCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StatusLog update
   */
  export type StatusLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusLog
     */
    select?: StatusLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusLogInclude<ExtArgs> | null
    /**
     * The data needed to update a StatusLog.
     */
    data: XOR<StatusLogUpdateInput, StatusLogUncheckedUpdateInput>
    /**
     * Choose, which StatusLog to update.
     */
    where: StatusLogWhereUniqueInput
  }

  /**
   * StatusLog updateMany
   */
  export type StatusLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StatusLogs.
     */
    data: XOR<StatusLogUpdateManyMutationInput, StatusLogUncheckedUpdateManyInput>
    /**
     * Filter which StatusLogs to update
     */
    where?: StatusLogWhereInput
  }

  /**
   * StatusLog upsert
   */
  export type StatusLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusLog
     */
    select?: StatusLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusLogInclude<ExtArgs> | null
    /**
     * The filter to search for the StatusLog to update in case it exists.
     */
    where: StatusLogWhereUniqueInput
    /**
     * In case the StatusLog found by the `where` argument doesn't exist, create a new StatusLog with this data.
     */
    create: XOR<StatusLogCreateInput, StatusLogUncheckedCreateInput>
    /**
     * In case the StatusLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StatusLogUpdateInput, StatusLogUncheckedUpdateInput>
  }

  /**
   * StatusLog delete
   */
  export type StatusLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusLog
     */
    select?: StatusLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusLogInclude<ExtArgs> | null
    /**
     * Filter which StatusLog to delete.
     */
    where: StatusLogWhereUniqueInput
  }

  /**
   * StatusLog deleteMany
   */
  export type StatusLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StatusLogs to delete
     */
    where?: StatusLogWhereInput
  }

  /**
   * StatusLog without action
   */
  export type StatusLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusLog
     */
    select?: StatusLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusLogInclude<ExtArgs> | null
  }


  /**
   * Model Position
   */

  export type AggregatePosition = {
    _count: PositionCountAggregateOutputType | null
    _min: PositionMinAggregateOutputType | null
    _max: PositionMaxAggregateOutputType | null
  }

  export type PositionMinAggregateOutputType = {
    id: string | null
    title: string | null
    department: string | null
    location: string | null
    isActive: boolean | null
  }

  export type PositionMaxAggregateOutputType = {
    id: string | null
    title: string | null
    department: string | null
    location: string | null
    isActive: boolean | null
  }

  export type PositionCountAggregateOutputType = {
    id: number
    title: number
    department: number
    location: number
    isActive: number
    _all: number
  }


  export type PositionMinAggregateInputType = {
    id?: true
    title?: true
    department?: true
    location?: true
    isActive?: true
  }

  export type PositionMaxAggregateInputType = {
    id?: true
    title?: true
    department?: true
    location?: true
    isActive?: true
  }

  export type PositionCountAggregateInputType = {
    id?: true
    title?: true
    department?: true
    location?: true
    isActive?: true
    _all?: true
  }

  export type PositionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Position to aggregate.
     */
    where?: PositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     */
    orderBy?: PositionOrderByWithRelationInput | PositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Positions
    **/
    _count?: true | PositionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PositionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PositionMaxAggregateInputType
  }

  export type GetPositionAggregateType<T extends PositionAggregateArgs> = {
        [P in keyof T & keyof AggregatePosition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosition[P]>
      : GetScalarType<T[P], AggregatePosition[P]>
  }




  export type PositionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PositionWhereInput
    orderBy?: PositionOrderByWithAggregationInput | PositionOrderByWithAggregationInput[]
    by: PositionScalarFieldEnum[] | PositionScalarFieldEnum
    having?: PositionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PositionCountAggregateInputType | true
    _min?: PositionMinAggregateInputType
    _max?: PositionMaxAggregateInputType
  }

  export type PositionGroupByOutputType = {
    id: string
    title: string
    department: string | null
    location: string | null
    isActive: boolean
    _count: PositionCountAggregateOutputType | null
    _min: PositionMinAggregateOutputType | null
    _max: PositionMaxAggregateOutputType | null
  }

  type GetPositionGroupByPayload<T extends PositionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PositionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PositionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PositionGroupByOutputType[P]>
            : GetScalarType<T[P], PositionGroupByOutputType[P]>
        }
      >
    >


  export type PositionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    department?: boolean
    location?: boolean
    isActive?: boolean
    referrals?: boolean | Position$referralsArgs<ExtArgs>
    _count?: boolean | PositionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["position"]>

  export type PositionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    department?: boolean
    location?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["position"]>

  export type PositionSelectScalar = {
    id?: boolean
    title?: boolean
    department?: boolean
    location?: boolean
    isActive?: boolean
  }

  export type PositionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referrals?: boolean | Position$referralsArgs<ExtArgs>
    _count?: boolean | PositionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PositionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PositionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Position"
    objects: {
      referrals: Prisma.$ReferralPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      department: string | null
      location: string | null
      isActive: boolean
    }, ExtArgs["result"]["position"]>
    composites: {}
  }

  type PositionGetPayload<S extends boolean | null | undefined | PositionDefaultArgs> = $Result.GetResult<Prisma.$PositionPayload, S>

  type PositionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PositionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PositionCountAggregateInputType | true
    }

  export interface PositionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Position'], meta: { name: 'Position' } }
    /**
     * Find zero or one Position that matches the filter.
     * @param {PositionFindUniqueArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PositionFindUniqueArgs>(args: SelectSubset<T, PositionFindUniqueArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Position that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PositionFindUniqueOrThrowArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PositionFindUniqueOrThrowArgs>(args: SelectSubset<T, PositionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Position that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionFindFirstArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PositionFindFirstArgs>(args?: SelectSubset<T, PositionFindFirstArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Position that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionFindFirstOrThrowArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PositionFindFirstOrThrowArgs>(args?: SelectSubset<T, PositionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Positions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Positions
     * const positions = await prisma.position.findMany()
     * 
     * // Get first 10 Positions
     * const positions = await prisma.position.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const positionWithIdOnly = await prisma.position.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PositionFindManyArgs>(args?: SelectSubset<T, PositionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Position.
     * @param {PositionCreateArgs} args - Arguments to create a Position.
     * @example
     * // Create one Position
     * const Position = await prisma.position.create({
     *   data: {
     *     // ... data to create a Position
     *   }
     * })
     * 
     */
    create<T extends PositionCreateArgs>(args: SelectSubset<T, PositionCreateArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Positions.
     * @param {PositionCreateManyArgs} args - Arguments to create many Positions.
     * @example
     * // Create many Positions
     * const position = await prisma.position.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PositionCreateManyArgs>(args?: SelectSubset<T, PositionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Positions and returns the data saved in the database.
     * @param {PositionCreateManyAndReturnArgs} args - Arguments to create many Positions.
     * @example
     * // Create many Positions
     * const position = await prisma.position.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Positions and only return the `id`
     * const positionWithIdOnly = await prisma.position.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PositionCreateManyAndReturnArgs>(args?: SelectSubset<T, PositionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Position.
     * @param {PositionDeleteArgs} args - Arguments to delete one Position.
     * @example
     * // Delete one Position
     * const Position = await prisma.position.delete({
     *   where: {
     *     // ... filter to delete one Position
     *   }
     * })
     * 
     */
    delete<T extends PositionDeleteArgs>(args: SelectSubset<T, PositionDeleteArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Position.
     * @param {PositionUpdateArgs} args - Arguments to update one Position.
     * @example
     * // Update one Position
     * const position = await prisma.position.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PositionUpdateArgs>(args: SelectSubset<T, PositionUpdateArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Positions.
     * @param {PositionDeleteManyArgs} args - Arguments to filter Positions to delete.
     * @example
     * // Delete a few Positions
     * const { count } = await prisma.position.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PositionDeleteManyArgs>(args?: SelectSubset<T, PositionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Positions
     * const position = await prisma.position.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PositionUpdateManyArgs>(args: SelectSubset<T, PositionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Position.
     * @param {PositionUpsertArgs} args - Arguments to update or create a Position.
     * @example
     * // Update or create a Position
     * const position = await prisma.position.upsert({
     *   create: {
     *     // ... data to create a Position
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Position we want to update
     *   }
     * })
     */
    upsert<T extends PositionUpsertArgs>(args: SelectSubset<T, PositionUpsertArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionCountArgs} args - Arguments to filter Positions to count.
     * @example
     * // Count the number of Positions
     * const count = await prisma.position.count({
     *   where: {
     *     // ... the filter for the Positions we want to count
     *   }
     * })
    **/
    count<T extends PositionCountArgs>(
      args?: Subset<T, PositionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PositionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Position.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PositionAggregateArgs>(args: Subset<T, PositionAggregateArgs>): Prisma.PrismaPromise<GetPositionAggregateType<T>>

    /**
     * Group by Position.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PositionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PositionGroupByArgs['orderBy'] }
        : { orderBy?: PositionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PositionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPositionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Position model
   */
  readonly fields: PositionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Position.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PositionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    referrals<T extends Position$referralsArgs<ExtArgs> = {}>(args?: Subset<T, Position$referralsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Position model
   */ 
  interface PositionFieldRefs {
    readonly id: FieldRef<"Position", 'String'>
    readonly title: FieldRef<"Position", 'String'>
    readonly department: FieldRef<"Position", 'String'>
    readonly location: FieldRef<"Position", 'String'>
    readonly isActive: FieldRef<"Position", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Position findUnique
   */
  export type PositionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Position to fetch.
     */
    where: PositionWhereUniqueInput
  }

  /**
   * Position findUniqueOrThrow
   */
  export type PositionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Position to fetch.
     */
    where: PositionWhereUniqueInput
  }

  /**
   * Position findFirst
   */
  export type PositionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Position to fetch.
     */
    where?: PositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     */
    orderBy?: PositionOrderByWithRelationInput | PositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Positions.
     */
    cursor?: PositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Positions.
     */
    distinct?: PositionScalarFieldEnum | PositionScalarFieldEnum[]
  }

  /**
   * Position findFirstOrThrow
   */
  export type PositionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Position to fetch.
     */
    where?: PositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     */
    orderBy?: PositionOrderByWithRelationInput | PositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Positions.
     */
    cursor?: PositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Positions.
     */
    distinct?: PositionScalarFieldEnum | PositionScalarFieldEnum[]
  }

  /**
   * Position findMany
   */
  export type PositionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Positions to fetch.
     */
    where?: PositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     */
    orderBy?: PositionOrderByWithRelationInput | PositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Positions.
     */
    cursor?: PositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     */
    skip?: number
    distinct?: PositionScalarFieldEnum | PositionScalarFieldEnum[]
  }

  /**
   * Position create
   */
  export type PositionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * The data needed to create a Position.
     */
    data: XOR<PositionCreateInput, PositionUncheckedCreateInput>
  }

  /**
   * Position createMany
   */
  export type PositionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Positions.
     */
    data: PositionCreateManyInput | PositionCreateManyInput[]
  }

  /**
   * Position createManyAndReturn
   */
  export type PositionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Positions.
     */
    data: PositionCreateManyInput | PositionCreateManyInput[]
  }

  /**
   * Position update
   */
  export type PositionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * The data needed to update a Position.
     */
    data: XOR<PositionUpdateInput, PositionUncheckedUpdateInput>
    /**
     * Choose, which Position to update.
     */
    where: PositionWhereUniqueInput
  }

  /**
   * Position updateMany
   */
  export type PositionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Positions.
     */
    data: XOR<PositionUpdateManyMutationInput, PositionUncheckedUpdateManyInput>
    /**
     * Filter which Positions to update
     */
    where?: PositionWhereInput
  }

  /**
   * Position upsert
   */
  export type PositionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * The filter to search for the Position to update in case it exists.
     */
    where: PositionWhereUniqueInput
    /**
     * In case the Position found by the `where` argument doesn't exist, create a new Position with this data.
     */
    create: XOR<PositionCreateInput, PositionUncheckedCreateInput>
    /**
     * In case the Position was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PositionUpdateInput, PositionUncheckedUpdateInput>
  }

  /**
   * Position delete
   */
  export type PositionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter which Position to delete.
     */
    where: PositionWhereUniqueInput
  }

  /**
   * Position deleteMany
   */
  export type PositionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Positions to delete
     */
    where?: PositionWhereInput
  }

  /**
   * Position.referrals
   */
  export type Position$referralsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Referral
     */
    select?: ReferralSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralInclude<ExtArgs> | null
    where?: ReferralWhereInput
    orderBy?: ReferralOrderByWithRelationInput | ReferralOrderByWithRelationInput[]
    cursor?: ReferralWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReferralScalarFieldEnum | ReferralScalarFieldEnum[]
  }

  /**
   * Position without action
   */
  export type PositionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    phone: 'phone',
    employeeId: 'employeeId',
    name: 'name',
    department: 'department',
    role: 'role',
    passwordHash: 'passwordHash',
    isVerified: 'isVerified',
    otp: 'otp',
    otpExpiry: 'otpExpiry',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const OtpVerificationScalarFieldEnum: {
    id: 'id',
    email: 'email',
    otpHash: 'otpHash',
    expiresAt: 'expiresAt',
    attempts: 'attempts',
    used: 'used',
    createdAt: 'createdAt'
  };

  export type OtpVerificationScalarFieldEnum = (typeof OtpVerificationScalarFieldEnum)[keyof typeof OtpVerificationScalarFieldEnum]


  export const EmailLogScalarFieldEnum: {
    id: 'id',
    to: 'to',
    subject: 'subject',
    body: 'body',
    otp: 'otp',
    sentAt: 'sentAt',
    status: 'status'
  };

  export type EmailLogScalarFieldEnum = (typeof EmailLogScalarFieldEnum)[keyof typeof EmailLogScalarFieldEnum]


  export const ReferralScalarFieldEnum: {
    id: 'id',
    refCode: 'refCode',
    candidateName: 'candidateName',
    candidateEmail: 'candidateEmail',
    candidatePhone: 'candidatePhone',
    resumeUrl: 'resumeUrl',
    notes: 'notes',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    referredById: 'referredById',
    positionId: 'positionId'
  };

  export type ReferralScalarFieldEnum = (typeof ReferralScalarFieldEnum)[keyof typeof ReferralScalarFieldEnum]


  export const StatusLogScalarFieldEnum: {
    id: 'id',
    fromStatus: 'fromStatus',
    toStatus: 'toStatus',
    note: 'note',
    createdAt: 'createdAt',
    referralId: 'referralId',
    changedBy: 'changedBy'
  };

  export type StatusLogScalarFieldEnum = (typeof StatusLogScalarFieldEnum)[keyof typeof StatusLogScalarFieldEnum]


  export const PositionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    department: 'department',
    location: 'location',
    isActive: 'isActive'
  };

  export type PositionScalarFieldEnum = (typeof PositionScalarFieldEnum)[keyof typeof PositionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    employeeId?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    department?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    passwordHash?: StringNullableFilter<"User"> | string | null
    isVerified?: BoolFilter<"User"> | boolean
    otp?: StringNullableFilter<"User"> | string | null
    otpExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    referrals?: ReferralListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    employeeId?: SortOrder
    name?: SortOrder
    department?: SortOrderInput | SortOrder
    role?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    otp?: SortOrderInput | SortOrder
    otpExpiry?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    referrals?: ReferralOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone?: string
    employeeId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    department?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    passwordHash?: StringNullableFilter<"User"> | string | null
    isVerified?: BoolFilter<"User"> | boolean
    otp?: StringNullableFilter<"User"> | string | null
    otpExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    referrals?: ReferralListRelationFilter
  }, "id" | "email" | "phone" | "employeeId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    employeeId?: SortOrder
    name?: SortOrder
    department?: SortOrderInput | SortOrder
    role?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    otp?: SortOrderInput | SortOrder
    otpExpiry?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    employeeId?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    department?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    otp?: StringNullableWithAggregatesFilter<"User"> | string | null
    otpExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type OtpVerificationWhereInput = {
    AND?: OtpVerificationWhereInput | OtpVerificationWhereInput[]
    OR?: OtpVerificationWhereInput[]
    NOT?: OtpVerificationWhereInput | OtpVerificationWhereInput[]
    id?: StringFilter<"OtpVerification"> | string
    email?: StringFilter<"OtpVerification"> | string
    otpHash?: StringFilter<"OtpVerification"> | string
    expiresAt?: DateTimeFilter<"OtpVerification"> | Date | string
    attempts?: IntFilter<"OtpVerification"> | number
    used?: BoolFilter<"OtpVerification"> | boolean
    createdAt?: DateTimeFilter<"OtpVerification"> | Date | string
  }

  export type OtpVerificationOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    otpHash?: SortOrder
    expiresAt?: SortOrder
    attempts?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
  }

  export type OtpVerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OtpVerificationWhereInput | OtpVerificationWhereInput[]
    OR?: OtpVerificationWhereInput[]
    NOT?: OtpVerificationWhereInput | OtpVerificationWhereInput[]
    email?: StringFilter<"OtpVerification"> | string
    otpHash?: StringFilter<"OtpVerification"> | string
    expiresAt?: DateTimeFilter<"OtpVerification"> | Date | string
    attempts?: IntFilter<"OtpVerification"> | number
    used?: BoolFilter<"OtpVerification"> | boolean
    createdAt?: DateTimeFilter<"OtpVerification"> | Date | string
  }, "id">

  export type OtpVerificationOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    otpHash?: SortOrder
    expiresAt?: SortOrder
    attempts?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
    _count?: OtpVerificationCountOrderByAggregateInput
    _avg?: OtpVerificationAvgOrderByAggregateInput
    _max?: OtpVerificationMaxOrderByAggregateInput
    _min?: OtpVerificationMinOrderByAggregateInput
    _sum?: OtpVerificationSumOrderByAggregateInput
  }

  export type OtpVerificationScalarWhereWithAggregatesInput = {
    AND?: OtpVerificationScalarWhereWithAggregatesInput | OtpVerificationScalarWhereWithAggregatesInput[]
    OR?: OtpVerificationScalarWhereWithAggregatesInput[]
    NOT?: OtpVerificationScalarWhereWithAggregatesInput | OtpVerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OtpVerification"> | string
    email?: StringWithAggregatesFilter<"OtpVerification"> | string
    otpHash?: StringWithAggregatesFilter<"OtpVerification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"OtpVerification"> | Date | string
    attempts?: IntWithAggregatesFilter<"OtpVerification"> | number
    used?: BoolWithAggregatesFilter<"OtpVerification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"OtpVerification"> | Date | string
  }

  export type EmailLogWhereInput = {
    AND?: EmailLogWhereInput | EmailLogWhereInput[]
    OR?: EmailLogWhereInput[]
    NOT?: EmailLogWhereInput | EmailLogWhereInput[]
    id?: StringFilter<"EmailLog"> | string
    to?: StringFilter<"EmailLog"> | string
    subject?: StringFilter<"EmailLog"> | string
    body?: StringFilter<"EmailLog"> | string
    otp?: StringNullableFilter<"EmailLog"> | string | null
    sentAt?: DateTimeFilter<"EmailLog"> | Date | string
    status?: StringFilter<"EmailLog"> | string
  }

  export type EmailLogOrderByWithRelationInput = {
    id?: SortOrder
    to?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    otp?: SortOrderInput | SortOrder
    sentAt?: SortOrder
    status?: SortOrder
  }

  export type EmailLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EmailLogWhereInput | EmailLogWhereInput[]
    OR?: EmailLogWhereInput[]
    NOT?: EmailLogWhereInput | EmailLogWhereInput[]
    to?: StringFilter<"EmailLog"> | string
    subject?: StringFilter<"EmailLog"> | string
    body?: StringFilter<"EmailLog"> | string
    otp?: StringNullableFilter<"EmailLog"> | string | null
    sentAt?: DateTimeFilter<"EmailLog"> | Date | string
    status?: StringFilter<"EmailLog"> | string
  }, "id">

  export type EmailLogOrderByWithAggregationInput = {
    id?: SortOrder
    to?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    otp?: SortOrderInput | SortOrder
    sentAt?: SortOrder
    status?: SortOrder
    _count?: EmailLogCountOrderByAggregateInput
    _max?: EmailLogMaxOrderByAggregateInput
    _min?: EmailLogMinOrderByAggregateInput
  }

  export type EmailLogScalarWhereWithAggregatesInput = {
    AND?: EmailLogScalarWhereWithAggregatesInput | EmailLogScalarWhereWithAggregatesInput[]
    OR?: EmailLogScalarWhereWithAggregatesInput[]
    NOT?: EmailLogScalarWhereWithAggregatesInput | EmailLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmailLog"> | string
    to?: StringWithAggregatesFilter<"EmailLog"> | string
    subject?: StringWithAggregatesFilter<"EmailLog"> | string
    body?: StringWithAggregatesFilter<"EmailLog"> | string
    otp?: StringNullableWithAggregatesFilter<"EmailLog"> | string | null
    sentAt?: DateTimeWithAggregatesFilter<"EmailLog"> | Date | string
    status?: StringWithAggregatesFilter<"EmailLog"> | string
  }

  export type ReferralWhereInput = {
    AND?: ReferralWhereInput | ReferralWhereInput[]
    OR?: ReferralWhereInput[]
    NOT?: ReferralWhereInput | ReferralWhereInput[]
    id?: StringFilter<"Referral"> | string
    refCode?: StringFilter<"Referral"> | string
    candidateName?: StringFilter<"Referral"> | string
    candidateEmail?: StringFilter<"Referral"> | string
    candidatePhone?: StringFilter<"Referral"> | string
    resumeUrl?: StringNullableFilter<"Referral"> | string | null
    notes?: StringNullableFilter<"Referral"> | string | null
    status?: StringFilter<"Referral"> | string
    createdAt?: DateTimeFilter<"Referral"> | Date | string
    updatedAt?: DateTimeFilter<"Referral"> | Date | string
    referredById?: StringFilter<"Referral"> | string
    positionId?: StringFilter<"Referral"> | string
    position?: XOR<PositionRelationFilter, PositionWhereInput>
    referredBy?: XOR<UserRelationFilter, UserWhereInput>
    statusHistory?: StatusLogListRelationFilter
  }

  export type ReferralOrderByWithRelationInput = {
    id?: SortOrder
    refCode?: SortOrder
    candidateName?: SortOrder
    candidateEmail?: SortOrder
    candidatePhone?: SortOrder
    resumeUrl?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    referredById?: SortOrder
    positionId?: SortOrder
    position?: PositionOrderByWithRelationInput
    referredBy?: UserOrderByWithRelationInput
    statusHistory?: StatusLogOrderByRelationAggregateInput
  }

  export type ReferralWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    refCode?: string
    AND?: ReferralWhereInput | ReferralWhereInput[]
    OR?: ReferralWhereInput[]
    NOT?: ReferralWhereInput | ReferralWhereInput[]
    candidateName?: StringFilter<"Referral"> | string
    candidateEmail?: StringFilter<"Referral"> | string
    candidatePhone?: StringFilter<"Referral"> | string
    resumeUrl?: StringNullableFilter<"Referral"> | string | null
    notes?: StringNullableFilter<"Referral"> | string | null
    status?: StringFilter<"Referral"> | string
    createdAt?: DateTimeFilter<"Referral"> | Date | string
    updatedAt?: DateTimeFilter<"Referral"> | Date | string
    referredById?: StringFilter<"Referral"> | string
    positionId?: StringFilter<"Referral"> | string
    position?: XOR<PositionRelationFilter, PositionWhereInput>
    referredBy?: XOR<UserRelationFilter, UserWhereInput>
    statusHistory?: StatusLogListRelationFilter
  }, "id" | "refCode">

  export type ReferralOrderByWithAggregationInput = {
    id?: SortOrder
    refCode?: SortOrder
    candidateName?: SortOrder
    candidateEmail?: SortOrder
    candidatePhone?: SortOrder
    resumeUrl?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    referredById?: SortOrder
    positionId?: SortOrder
    _count?: ReferralCountOrderByAggregateInput
    _max?: ReferralMaxOrderByAggregateInput
    _min?: ReferralMinOrderByAggregateInput
  }

  export type ReferralScalarWhereWithAggregatesInput = {
    AND?: ReferralScalarWhereWithAggregatesInput | ReferralScalarWhereWithAggregatesInput[]
    OR?: ReferralScalarWhereWithAggregatesInput[]
    NOT?: ReferralScalarWhereWithAggregatesInput | ReferralScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Referral"> | string
    refCode?: StringWithAggregatesFilter<"Referral"> | string
    candidateName?: StringWithAggregatesFilter<"Referral"> | string
    candidateEmail?: StringWithAggregatesFilter<"Referral"> | string
    candidatePhone?: StringWithAggregatesFilter<"Referral"> | string
    resumeUrl?: StringNullableWithAggregatesFilter<"Referral"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Referral"> | string | null
    status?: StringWithAggregatesFilter<"Referral"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Referral"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Referral"> | Date | string
    referredById?: StringWithAggregatesFilter<"Referral"> | string
    positionId?: StringWithAggregatesFilter<"Referral"> | string
  }

  export type StatusLogWhereInput = {
    AND?: StatusLogWhereInput | StatusLogWhereInput[]
    OR?: StatusLogWhereInput[]
    NOT?: StatusLogWhereInput | StatusLogWhereInput[]
    id?: StringFilter<"StatusLog"> | string
    fromStatus?: StringFilter<"StatusLog"> | string
    toStatus?: StringFilter<"StatusLog"> | string
    note?: StringNullableFilter<"StatusLog"> | string | null
    createdAt?: DateTimeFilter<"StatusLog"> | Date | string
    referralId?: StringFilter<"StatusLog"> | string
    changedBy?: StringFilter<"StatusLog"> | string
    referral?: XOR<ReferralRelationFilter, ReferralWhereInput>
  }

  export type StatusLogOrderByWithRelationInput = {
    id?: SortOrder
    fromStatus?: SortOrder
    toStatus?: SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    referralId?: SortOrder
    changedBy?: SortOrder
    referral?: ReferralOrderByWithRelationInput
  }

  export type StatusLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StatusLogWhereInput | StatusLogWhereInput[]
    OR?: StatusLogWhereInput[]
    NOT?: StatusLogWhereInput | StatusLogWhereInput[]
    fromStatus?: StringFilter<"StatusLog"> | string
    toStatus?: StringFilter<"StatusLog"> | string
    note?: StringNullableFilter<"StatusLog"> | string | null
    createdAt?: DateTimeFilter<"StatusLog"> | Date | string
    referralId?: StringFilter<"StatusLog"> | string
    changedBy?: StringFilter<"StatusLog"> | string
    referral?: XOR<ReferralRelationFilter, ReferralWhereInput>
  }, "id">

  export type StatusLogOrderByWithAggregationInput = {
    id?: SortOrder
    fromStatus?: SortOrder
    toStatus?: SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    referralId?: SortOrder
    changedBy?: SortOrder
    _count?: StatusLogCountOrderByAggregateInput
    _max?: StatusLogMaxOrderByAggregateInput
    _min?: StatusLogMinOrderByAggregateInput
  }

  export type StatusLogScalarWhereWithAggregatesInput = {
    AND?: StatusLogScalarWhereWithAggregatesInput | StatusLogScalarWhereWithAggregatesInput[]
    OR?: StatusLogScalarWhereWithAggregatesInput[]
    NOT?: StatusLogScalarWhereWithAggregatesInput | StatusLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StatusLog"> | string
    fromStatus?: StringWithAggregatesFilter<"StatusLog"> | string
    toStatus?: StringWithAggregatesFilter<"StatusLog"> | string
    note?: StringNullableWithAggregatesFilter<"StatusLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"StatusLog"> | Date | string
    referralId?: StringWithAggregatesFilter<"StatusLog"> | string
    changedBy?: StringWithAggregatesFilter<"StatusLog"> | string
  }

  export type PositionWhereInput = {
    AND?: PositionWhereInput | PositionWhereInput[]
    OR?: PositionWhereInput[]
    NOT?: PositionWhereInput | PositionWhereInput[]
    id?: StringFilter<"Position"> | string
    title?: StringFilter<"Position"> | string
    department?: StringNullableFilter<"Position"> | string | null
    location?: StringNullableFilter<"Position"> | string | null
    isActive?: BoolFilter<"Position"> | boolean
    referrals?: ReferralListRelationFilter
  }

  export type PositionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    department?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    isActive?: SortOrder
    referrals?: ReferralOrderByRelationAggregateInput
  }

  export type PositionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PositionWhereInput | PositionWhereInput[]
    OR?: PositionWhereInput[]
    NOT?: PositionWhereInput | PositionWhereInput[]
    title?: StringFilter<"Position"> | string
    department?: StringNullableFilter<"Position"> | string | null
    location?: StringNullableFilter<"Position"> | string | null
    isActive?: BoolFilter<"Position"> | boolean
    referrals?: ReferralListRelationFilter
  }, "id">

  export type PositionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    department?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    isActive?: SortOrder
    _count?: PositionCountOrderByAggregateInput
    _max?: PositionMaxOrderByAggregateInput
    _min?: PositionMinOrderByAggregateInput
  }

  export type PositionScalarWhereWithAggregatesInput = {
    AND?: PositionScalarWhereWithAggregatesInput | PositionScalarWhereWithAggregatesInput[]
    OR?: PositionScalarWhereWithAggregatesInput[]
    NOT?: PositionScalarWhereWithAggregatesInput | PositionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Position"> | string
    title?: StringWithAggregatesFilter<"Position"> | string
    department?: StringNullableWithAggregatesFilter<"Position"> | string | null
    location?: StringNullableWithAggregatesFilter<"Position"> | string | null
    isActive?: BoolWithAggregatesFilter<"Position"> | boolean
  }

  export type UserCreateInput = {
    id?: string
    email: string
    phone: string
    employeeId: string
    name: string
    department?: string | null
    role?: string
    passwordHash?: string | null
    isVerified?: boolean
    otp?: string | null
    otpExpiry?: Date | string | null
    createdAt?: Date | string
    referrals?: ReferralCreateNestedManyWithoutReferredByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    phone: string
    employeeId: string
    name: string
    department?: string | null
    role?: string
    passwordHash?: string | null
    isVerified?: boolean
    otp?: string | null
    otpExpiry?: Date | string | null
    createdAt?: Date | string
    referrals?: ReferralUncheckedCreateNestedManyWithoutReferredByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referrals?: ReferralUpdateManyWithoutReferredByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referrals?: ReferralUncheckedUpdateManyWithoutReferredByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    phone: string
    employeeId: string
    name: string
    department?: string | null
    role?: string
    passwordHash?: string | null
    isVerified?: boolean
    otp?: string | null
    otpExpiry?: Date | string | null
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpVerificationCreateInput = {
    id?: string
    email: string
    otpHash: string
    expiresAt: Date | string
    attempts?: number
    used?: boolean
    createdAt?: Date | string
  }

  export type OtpVerificationUncheckedCreateInput = {
    id?: string
    email: string
    otpHash: string
    expiresAt: Date | string
    attempts?: number
    used?: boolean
    createdAt?: Date | string
  }

  export type OtpVerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    otpHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: IntFieldUpdateOperationsInput | number
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpVerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    otpHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: IntFieldUpdateOperationsInput | number
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpVerificationCreateManyInput = {
    id?: string
    email: string
    otpHash: string
    expiresAt: Date | string
    attempts?: number
    used?: boolean
    createdAt?: Date | string
  }

  export type OtpVerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    otpHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: IntFieldUpdateOperationsInput | number
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpVerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    otpHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attempts?: IntFieldUpdateOperationsInput | number
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailLogCreateInput = {
    id?: string
    to: string
    subject: string
    body: string
    otp?: string | null
    sentAt?: Date | string
    status?: string
  }

  export type EmailLogUncheckedCreateInput = {
    id?: string
    to: string
    subject: string
    body: string
    otp?: string | null
    sentAt?: Date | string
    status?: string
  }

  export type EmailLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type EmailLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type EmailLogCreateManyInput = {
    id?: string
    to: string
    subject: string
    body: string
    otp?: string | null
    sentAt?: Date | string
    status?: string
  }

  export type EmailLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type EmailLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ReferralCreateInput = {
    id?: string
    refCode?: string
    candidateName: string
    candidateEmail: string
    candidatePhone: string
    resumeUrl?: string | null
    notes?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    position: PositionCreateNestedOneWithoutReferralsInput
    referredBy: UserCreateNestedOneWithoutReferralsInput
    statusHistory?: StatusLogCreateNestedManyWithoutReferralInput
  }

  export type ReferralUncheckedCreateInput = {
    id?: string
    refCode?: string
    candidateName: string
    candidateEmail: string
    candidatePhone: string
    resumeUrl?: string | null
    notes?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    referredById: string
    positionId: string
    statusHistory?: StatusLogUncheckedCreateNestedManyWithoutReferralInput
  }

  export type ReferralUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    refCode?: StringFieldUpdateOperationsInput | string
    candidateName?: StringFieldUpdateOperationsInput | string
    candidateEmail?: StringFieldUpdateOperationsInput | string
    candidatePhone?: StringFieldUpdateOperationsInput | string
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    position?: PositionUpdateOneRequiredWithoutReferralsNestedInput
    referredBy?: UserUpdateOneRequiredWithoutReferralsNestedInput
    statusHistory?: StatusLogUpdateManyWithoutReferralNestedInput
  }

  export type ReferralUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    refCode?: StringFieldUpdateOperationsInput | string
    candidateName?: StringFieldUpdateOperationsInput | string
    candidateEmail?: StringFieldUpdateOperationsInput | string
    candidatePhone?: StringFieldUpdateOperationsInput | string
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referredById?: StringFieldUpdateOperationsInput | string
    positionId?: StringFieldUpdateOperationsInput | string
    statusHistory?: StatusLogUncheckedUpdateManyWithoutReferralNestedInput
  }

  export type ReferralCreateManyInput = {
    id?: string
    refCode?: string
    candidateName: string
    candidateEmail: string
    candidatePhone: string
    resumeUrl?: string | null
    notes?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    referredById: string
    positionId: string
  }

  export type ReferralUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    refCode?: StringFieldUpdateOperationsInput | string
    candidateName?: StringFieldUpdateOperationsInput | string
    candidateEmail?: StringFieldUpdateOperationsInput | string
    candidatePhone?: StringFieldUpdateOperationsInput | string
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    refCode?: StringFieldUpdateOperationsInput | string
    candidateName?: StringFieldUpdateOperationsInput | string
    candidateEmail?: StringFieldUpdateOperationsInput | string
    candidatePhone?: StringFieldUpdateOperationsInput | string
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referredById?: StringFieldUpdateOperationsInput | string
    positionId?: StringFieldUpdateOperationsInput | string
  }

  export type StatusLogCreateInput = {
    id?: string
    fromStatus: string
    toStatus: string
    note?: string | null
    createdAt?: Date | string
    changedBy: string
    referral: ReferralCreateNestedOneWithoutStatusHistoryInput
  }

  export type StatusLogUncheckedCreateInput = {
    id?: string
    fromStatus: string
    toStatus: string
    note?: string | null
    createdAt?: Date | string
    referralId: string
    changedBy: string
  }

  export type StatusLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromStatus?: StringFieldUpdateOperationsInput | string
    toStatus?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    changedBy?: StringFieldUpdateOperationsInput | string
    referral?: ReferralUpdateOneRequiredWithoutStatusHistoryNestedInput
  }

  export type StatusLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromStatus?: StringFieldUpdateOperationsInput | string
    toStatus?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referralId?: StringFieldUpdateOperationsInput | string
    changedBy?: StringFieldUpdateOperationsInput | string
  }

  export type StatusLogCreateManyInput = {
    id?: string
    fromStatus: string
    toStatus: string
    note?: string | null
    createdAt?: Date | string
    referralId: string
    changedBy: string
  }

  export type StatusLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromStatus?: StringFieldUpdateOperationsInput | string
    toStatus?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    changedBy?: StringFieldUpdateOperationsInput | string
  }

  export type StatusLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromStatus?: StringFieldUpdateOperationsInput | string
    toStatus?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referralId?: StringFieldUpdateOperationsInput | string
    changedBy?: StringFieldUpdateOperationsInput | string
  }

  export type PositionCreateInput = {
    id?: string
    title: string
    department?: string | null
    location?: string | null
    isActive?: boolean
    referrals?: ReferralCreateNestedManyWithoutPositionInput
  }

  export type PositionUncheckedCreateInput = {
    id?: string
    title: string
    department?: string | null
    location?: string | null
    isActive?: boolean
    referrals?: ReferralUncheckedCreateNestedManyWithoutPositionInput
  }

  export type PositionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    referrals?: ReferralUpdateManyWithoutPositionNestedInput
  }

  export type PositionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    referrals?: ReferralUncheckedUpdateManyWithoutPositionNestedInput
  }

  export type PositionCreateManyInput = {
    id?: string
    title: string
    department?: string | null
    location?: string | null
    isActive?: boolean
  }

  export type PositionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PositionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ReferralListRelationFilter = {
    every?: ReferralWhereInput
    some?: ReferralWhereInput
    none?: ReferralWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ReferralOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    employeeId?: SortOrder
    name?: SortOrder
    department?: SortOrder
    role?: SortOrder
    passwordHash?: SortOrder
    isVerified?: SortOrder
    otp?: SortOrder
    otpExpiry?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    employeeId?: SortOrder
    name?: SortOrder
    department?: SortOrder
    role?: SortOrder
    passwordHash?: SortOrder
    isVerified?: SortOrder
    otp?: SortOrder
    otpExpiry?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    employeeId?: SortOrder
    name?: SortOrder
    department?: SortOrder
    role?: SortOrder
    passwordHash?: SortOrder
    isVerified?: SortOrder
    otp?: SortOrder
    otpExpiry?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type OtpVerificationCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    otpHash?: SortOrder
    expiresAt?: SortOrder
    attempts?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
  }

  export type OtpVerificationAvgOrderByAggregateInput = {
    attempts?: SortOrder
  }

  export type OtpVerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    otpHash?: SortOrder
    expiresAt?: SortOrder
    attempts?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
  }

  export type OtpVerificationMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    otpHash?: SortOrder
    expiresAt?: SortOrder
    attempts?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
  }

  export type OtpVerificationSumOrderByAggregateInput = {
    attempts?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EmailLogCountOrderByAggregateInput = {
    id?: SortOrder
    to?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    otp?: SortOrder
    sentAt?: SortOrder
    status?: SortOrder
  }

  export type EmailLogMaxOrderByAggregateInput = {
    id?: SortOrder
    to?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    otp?: SortOrder
    sentAt?: SortOrder
    status?: SortOrder
  }

  export type EmailLogMinOrderByAggregateInput = {
    id?: SortOrder
    to?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    otp?: SortOrder
    sentAt?: SortOrder
    status?: SortOrder
  }

  export type PositionRelationFilter = {
    is?: PositionWhereInput
    isNot?: PositionWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type StatusLogListRelationFilter = {
    every?: StatusLogWhereInput
    some?: StatusLogWhereInput
    none?: StatusLogWhereInput
  }

  export type StatusLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReferralCountOrderByAggregateInput = {
    id?: SortOrder
    refCode?: SortOrder
    candidateName?: SortOrder
    candidateEmail?: SortOrder
    candidatePhone?: SortOrder
    resumeUrl?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    referredById?: SortOrder
    positionId?: SortOrder
  }

  export type ReferralMaxOrderByAggregateInput = {
    id?: SortOrder
    refCode?: SortOrder
    candidateName?: SortOrder
    candidateEmail?: SortOrder
    candidatePhone?: SortOrder
    resumeUrl?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    referredById?: SortOrder
    positionId?: SortOrder
  }

  export type ReferralMinOrderByAggregateInput = {
    id?: SortOrder
    refCode?: SortOrder
    candidateName?: SortOrder
    candidateEmail?: SortOrder
    candidatePhone?: SortOrder
    resumeUrl?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    referredById?: SortOrder
    positionId?: SortOrder
  }

  export type ReferralRelationFilter = {
    is?: ReferralWhereInput
    isNot?: ReferralWhereInput
  }

  export type StatusLogCountOrderByAggregateInput = {
    id?: SortOrder
    fromStatus?: SortOrder
    toStatus?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    referralId?: SortOrder
    changedBy?: SortOrder
  }

  export type StatusLogMaxOrderByAggregateInput = {
    id?: SortOrder
    fromStatus?: SortOrder
    toStatus?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    referralId?: SortOrder
    changedBy?: SortOrder
  }

  export type StatusLogMinOrderByAggregateInput = {
    id?: SortOrder
    fromStatus?: SortOrder
    toStatus?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    referralId?: SortOrder
    changedBy?: SortOrder
  }

  export type PositionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    department?: SortOrder
    location?: SortOrder
    isActive?: SortOrder
  }

  export type PositionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    department?: SortOrder
    location?: SortOrder
    isActive?: SortOrder
  }

  export type PositionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    department?: SortOrder
    location?: SortOrder
    isActive?: SortOrder
  }

  export type ReferralCreateNestedManyWithoutReferredByInput = {
    create?: XOR<ReferralCreateWithoutReferredByInput, ReferralUncheckedCreateWithoutReferredByInput> | ReferralCreateWithoutReferredByInput[] | ReferralUncheckedCreateWithoutReferredByInput[]
    connectOrCreate?: ReferralCreateOrConnectWithoutReferredByInput | ReferralCreateOrConnectWithoutReferredByInput[]
    createMany?: ReferralCreateManyReferredByInputEnvelope
    connect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
  }

  export type ReferralUncheckedCreateNestedManyWithoutReferredByInput = {
    create?: XOR<ReferralCreateWithoutReferredByInput, ReferralUncheckedCreateWithoutReferredByInput> | ReferralCreateWithoutReferredByInput[] | ReferralUncheckedCreateWithoutReferredByInput[]
    connectOrCreate?: ReferralCreateOrConnectWithoutReferredByInput | ReferralCreateOrConnectWithoutReferredByInput[]
    createMany?: ReferralCreateManyReferredByInputEnvelope
    connect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ReferralUpdateManyWithoutReferredByNestedInput = {
    create?: XOR<ReferralCreateWithoutReferredByInput, ReferralUncheckedCreateWithoutReferredByInput> | ReferralCreateWithoutReferredByInput[] | ReferralUncheckedCreateWithoutReferredByInput[]
    connectOrCreate?: ReferralCreateOrConnectWithoutReferredByInput | ReferralCreateOrConnectWithoutReferredByInput[]
    upsert?: ReferralUpsertWithWhereUniqueWithoutReferredByInput | ReferralUpsertWithWhereUniqueWithoutReferredByInput[]
    createMany?: ReferralCreateManyReferredByInputEnvelope
    set?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    disconnect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    delete?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    connect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    update?: ReferralUpdateWithWhereUniqueWithoutReferredByInput | ReferralUpdateWithWhereUniqueWithoutReferredByInput[]
    updateMany?: ReferralUpdateManyWithWhereWithoutReferredByInput | ReferralUpdateManyWithWhereWithoutReferredByInput[]
    deleteMany?: ReferralScalarWhereInput | ReferralScalarWhereInput[]
  }

  export type ReferralUncheckedUpdateManyWithoutReferredByNestedInput = {
    create?: XOR<ReferralCreateWithoutReferredByInput, ReferralUncheckedCreateWithoutReferredByInput> | ReferralCreateWithoutReferredByInput[] | ReferralUncheckedCreateWithoutReferredByInput[]
    connectOrCreate?: ReferralCreateOrConnectWithoutReferredByInput | ReferralCreateOrConnectWithoutReferredByInput[]
    upsert?: ReferralUpsertWithWhereUniqueWithoutReferredByInput | ReferralUpsertWithWhereUniqueWithoutReferredByInput[]
    createMany?: ReferralCreateManyReferredByInputEnvelope
    set?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    disconnect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    delete?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    connect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    update?: ReferralUpdateWithWhereUniqueWithoutReferredByInput | ReferralUpdateWithWhereUniqueWithoutReferredByInput[]
    updateMany?: ReferralUpdateManyWithWhereWithoutReferredByInput | ReferralUpdateManyWithWhereWithoutReferredByInput[]
    deleteMany?: ReferralScalarWhereInput | ReferralScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PositionCreateNestedOneWithoutReferralsInput = {
    create?: XOR<PositionCreateWithoutReferralsInput, PositionUncheckedCreateWithoutReferralsInput>
    connectOrCreate?: PositionCreateOrConnectWithoutReferralsInput
    connect?: PositionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReferralsInput = {
    create?: XOR<UserCreateWithoutReferralsInput, UserUncheckedCreateWithoutReferralsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReferralsInput
    connect?: UserWhereUniqueInput
  }

  export type StatusLogCreateNestedManyWithoutReferralInput = {
    create?: XOR<StatusLogCreateWithoutReferralInput, StatusLogUncheckedCreateWithoutReferralInput> | StatusLogCreateWithoutReferralInput[] | StatusLogUncheckedCreateWithoutReferralInput[]
    connectOrCreate?: StatusLogCreateOrConnectWithoutReferralInput | StatusLogCreateOrConnectWithoutReferralInput[]
    createMany?: StatusLogCreateManyReferralInputEnvelope
    connect?: StatusLogWhereUniqueInput | StatusLogWhereUniqueInput[]
  }

  export type StatusLogUncheckedCreateNestedManyWithoutReferralInput = {
    create?: XOR<StatusLogCreateWithoutReferralInput, StatusLogUncheckedCreateWithoutReferralInput> | StatusLogCreateWithoutReferralInput[] | StatusLogUncheckedCreateWithoutReferralInput[]
    connectOrCreate?: StatusLogCreateOrConnectWithoutReferralInput | StatusLogCreateOrConnectWithoutReferralInput[]
    createMany?: StatusLogCreateManyReferralInputEnvelope
    connect?: StatusLogWhereUniqueInput | StatusLogWhereUniqueInput[]
  }

  export type PositionUpdateOneRequiredWithoutReferralsNestedInput = {
    create?: XOR<PositionCreateWithoutReferralsInput, PositionUncheckedCreateWithoutReferralsInput>
    connectOrCreate?: PositionCreateOrConnectWithoutReferralsInput
    upsert?: PositionUpsertWithoutReferralsInput
    connect?: PositionWhereUniqueInput
    update?: XOR<XOR<PositionUpdateToOneWithWhereWithoutReferralsInput, PositionUpdateWithoutReferralsInput>, PositionUncheckedUpdateWithoutReferralsInput>
  }

  export type UserUpdateOneRequiredWithoutReferralsNestedInput = {
    create?: XOR<UserCreateWithoutReferralsInput, UserUncheckedCreateWithoutReferralsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReferralsInput
    upsert?: UserUpsertWithoutReferralsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReferralsInput, UserUpdateWithoutReferralsInput>, UserUncheckedUpdateWithoutReferralsInput>
  }

  export type StatusLogUpdateManyWithoutReferralNestedInput = {
    create?: XOR<StatusLogCreateWithoutReferralInput, StatusLogUncheckedCreateWithoutReferralInput> | StatusLogCreateWithoutReferralInput[] | StatusLogUncheckedCreateWithoutReferralInput[]
    connectOrCreate?: StatusLogCreateOrConnectWithoutReferralInput | StatusLogCreateOrConnectWithoutReferralInput[]
    upsert?: StatusLogUpsertWithWhereUniqueWithoutReferralInput | StatusLogUpsertWithWhereUniqueWithoutReferralInput[]
    createMany?: StatusLogCreateManyReferralInputEnvelope
    set?: StatusLogWhereUniqueInput | StatusLogWhereUniqueInput[]
    disconnect?: StatusLogWhereUniqueInput | StatusLogWhereUniqueInput[]
    delete?: StatusLogWhereUniqueInput | StatusLogWhereUniqueInput[]
    connect?: StatusLogWhereUniqueInput | StatusLogWhereUniqueInput[]
    update?: StatusLogUpdateWithWhereUniqueWithoutReferralInput | StatusLogUpdateWithWhereUniqueWithoutReferralInput[]
    updateMany?: StatusLogUpdateManyWithWhereWithoutReferralInput | StatusLogUpdateManyWithWhereWithoutReferralInput[]
    deleteMany?: StatusLogScalarWhereInput | StatusLogScalarWhereInput[]
  }

  export type StatusLogUncheckedUpdateManyWithoutReferralNestedInput = {
    create?: XOR<StatusLogCreateWithoutReferralInput, StatusLogUncheckedCreateWithoutReferralInput> | StatusLogCreateWithoutReferralInput[] | StatusLogUncheckedCreateWithoutReferralInput[]
    connectOrCreate?: StatusLogCreateOrConnectWithoutReferralInput | StatusLogCreateOrConnectWithoutReferralInput[]
    upsert?: StatusLogUpsertWithWhereUniqueWithoutReferralInput | StatusLogUpsertWithWhereUniqueWithoutReferralInput[]
    createMany?: StatusLogCreateManyReferralInputEnvelope
    set?: StatusLogWhereUniqueInput | StatusLogWhereUniqueInput[]
    disconnect?: StatusLogWhereUniqueInput | StatusLogWhereUniqueInput[]
    delete?: StatusLogWhereUniqueInput | StatusLogWhereUniqueInput[]
    connect?: StatusLogWhereUniqueInput | StatusLogWhereUniqueInput[]
    update?: StatusLogUpdateWithWhereUniqueWithoutReferralInput | StatusLogUpdateWithWhereUniqueWithoutReferralInput[]
    updateMany?: StatusLogUpdateManyWithWhereWithoutReferralInput | StatusLogUpdateManyWithWhereWithoutReferralInput[]
    deleteMany?: StatusLogScalarWhereInput | StatusLogScalarWhereInput[]
  }

  export type ReferralCreateNestedOneWithoutStatusHistoryInput = {
    create?: XOR<ReferralCreateWithoutStatusHistoryInput, ReferralUncheckedCreateWithoutStatusHistoryInput>
    connectOrCreate?: ReferralCreateOrConnectWithoutStatusHistoryInput
    connect?: ReferralWhereUniqueInput
  }

  export type ReferralUpdateOneRequiredWithoutStatusHistoryNestedInput = {
    create?: XOR<ReferralCreateWithoutStatusHistoryInput, ReferralUncheckedCreateWithoutStatusHistoryInput>
    connectOrCreate?: ReferralCreateOrConnectWithoutStatusHistoryInput
    upsert?: ReferralUpsertWithoutStatusHistoryInput
    connect?: ReferralWhereUniqueInput
    update?: XOR<XOR<ReferralUpdateToOneWithWhereWithoutStatusHistoryInput, ReferralUpdateWithoutStatusHistoryInput>, ReferralUncheckedUpdateWithoutStatusHistoryInput>
  }

  export type ReferralCreateNestedManyWithoutPositionInput = {
    create?: XOR<ReferralCreateWithoutPositionInput, ReferralUncheckedCreateWithoutPositionInput> | ReferralCreateWithoutPositionInput[] | ReferralUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: ReferralCreateOrConnectWithoutPositionInput | ReferralCreateOrConnectWithoutPositionInput[]
    createMany?: ReferralCreateManyPositionInputEnvelope
    connect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
  }

  export type ReferralUncheckedCreateNestedManyWithoutPositionInput = {
    create?: XOR<ReferralCreateWithoutPositionInput, ReferralUncheckedCreateWithoutPositionInput> | ReferralCreateWithoutPositionInput[] | ReferralUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: ReferralCreateOrConnectWithoutPositionInput | ReferralCreateOrConnectWithoutPositionInput[]
    createMany?: ReferralCreateManyPositionInputEnvelope
    connect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
  }

  export type ReferralUpdateManyWithoutPositionNestedInput = {
    create?: XOR<ReferralCreateWithoutPositionInput, ReferralUncheckedCreateWithoutPositionInput> | ReferralCreateWithoutPositionInput[] | ReferralUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: ReferralCreateOrConnectWithoutPositionInput | ReferralCreateOrConnectWithoutPositionInput[]
    upsert?: ReferralUpsertWithWhereUniqueWithoutPositionInput | ReferralUpsertWithWhereUniqueWithoutPositionInput[]
    createMany?: ReferralCreateManyPositionInputEnvelope
    set?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    disconnect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    delete?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    connect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    update?: ReferralUpdateWithWhereUniqueWithoutPositionInput | ReferralUpdateWithWhereUniqueWithoutPositionInput[]
    updateMany?: ReferralUpdateManyWithWhereWithoutPositionInput | ReferralUpdateManyWithWhereWithoutPositionInput[]
    deleteMany?: ReferralScalarWhereInput | ReferralScalarWhereInput[]
  }

  export type ReferralUncheckedUpdateManyWithoutPositionNestedInput = {
    create?: XOR<ReferralCreateWithoutPositionInput, ReferralUncheckedCreateWithoutPositionInput> | ReferralCreateWithoutPositionInput[] | ReferralUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: ReferralCreateOrConnectWithoutPositionInput | ReferralCreateOrConnectWithoutPositionInput[]
    upsert?: ReferralUpsertWithWhereUniqueWithoutPositionInput | ReferralUpsertWithWhereUniqueWithoutPositionInput[]
    createMany?: ReferralCreateManyPositionInputEnvelope
    set?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    disconnect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    delete?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    connect?: ReferralWhereUniqueInput | ReferralWhereUniqueInput[]
    update?: ReferralUpdateWithWhereUniqueWithoutPositionInput | ReferralUpdateWithWhereUniqueWithoutPositionInput[]
    updateMany?: ReferralUpdateManyWithWhereWithoutPositionInput | ReferralUpdateManyWithWhereWithoutPositionInput[]
    deleteMany?: ReferralScalarWhereInput | ReferralScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ReferralCreateWithoutReferredByInput = {
    id?: string
    refCode?: string
    candidateName: string
    candidateEmail: string
    candidatePhone: string
    resumeUrl?: string | null
    notes?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    position: PositionCreateNestedOneWithoutReferralsInput
    statusHistory?: StatusLogCreateNestedManyWithoutReferralInput
  }

  export type ReferralUncheckedCreateWithoutReferredByInput = {
    id?: string
    refCode?: string
    candidateName: string
    candidateEmail: string
    candidatePhone: string
    resumeUrl?: string | null
    notes?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    positionId: string
    statusHistory?: StatusLogUncheckedCreateNestedManyWithoutReferralInput
  }

  export type ReferralCreateOrConnectWithoutReferredByInput = {
    where: ReferralWhereUniqueInput
    create: XOR<ReferralCreateWithoutReferredByInput, ReferralUncheckedCreateWithoutReferredByInput>
  }

  export type ReferralCreateManyReferredByInputEnvelope = {
    data: ReferralCreateManyReferredByInput | ReferralCreateManyReferredByInput[]
  }

  export type ReferralUpsertWithWhereUniqueWithoutReferredByInput = {
    where: ReferralWhereUniqueInput
    update: XOR<ReferralUpdateWithoutReferredByInput, ReferralUncheckedUpdateWithoutReferredByInput>
    create: XOR<ReferralCreateWithoutReferredByInput, ReferralUncheckedCreateWithoutReferredByInput>
  }

  export type ReferralUpdateWithWhereUniqueWithoutReferredByInput = {
    where: ReferralWhereUniqueInput
    data: XOR<ReferralUpdateWithoutReferredByInput, ReferralUncheckedUpdateWithoutReferredByInput>
  }

  export type ReferralUpdateManyWithWhereWithoutReferredByInput = {
    where: ReferralScalarWhereInput
    data: XOR<ReferralUpdateManyMutationInput, ReferralUncheckedUpdateManyWithoutReferredByInput>
  }

  export type ReferralScalarWhereInput = {
    AND?: ReferralScalarWhereInput | ReferralScalarWhereInput[]
    OR?: ReferralScalarWhereInput[]
    NOT?: ReferralScalarWhereInput | ReferralScalarWhereInput[]
    id?: StringFilter<"Referral"> | string
    refCode?: StringFilter<"Referral"> | string
    candidateName?: StringFilter<"Referral"> | string
    candidateEmail?: StringFilter<"Referral"> | string
    candidatePhone?: StringFilter<"Referral"> | string
    resumeUrl?: StringNullableFilter<"Referral"> | string | null
    notes?: StringNullableFilter<"Referral"> | string | null
    status?: StringFilter<"Referral"> | string
    createdAt?: DateTimeFilter<"Referral"> | Date | string
    updatedAt?: DateTimeFilter<"Referral"> | Date | string
    referredById?: StringFilter<"Referral"> | string
    positionId?: StringFilter<"Referral"> | string
  }

  export type PositionCreateWithoutReferralsInput = {
    id?: string
    title: string
    department?: string | null
    location?: string | null
    isActive?: boolean
  }

  export type PositionUncheckedCreateWithoutReferralsInput = {
    id?: string
    title: string
    department?: string | null
    location?: string | null
    isActive?: boolean
  }

  export type PositionCreateOrConnectWithoutReferralsInput = {
    where: PositionWhereUniqueInput
    create: XOR<PositionCreateWithoutReferralsInput, PositionUncheckedCreateWithoutReferralsInput>
  }

  export type UserCreateWithoutReferralsInput = {
    id?: string
    email: string
    phone: string
    employeeId: string
    name: string
    department?: string | null
    role?: string
    passwordHash?: string | null
    isVerified?: boolean
    otp?: string | null
    otpExpiry?: Date | string | null
    createdAt?: Date | string
  }

  export type UserUncheckedCreateWithoutReferralsInput = {
    id?: string
    email: string
    phone: string
    employeeId: string
    name: string
    department?: string | null
    role?: string
    passwordHash?: string | null
    isVerified?: boolean
    otp?: string | null
    otpExpiry?: Date | string | null
    createdAt?: Date | string
  }

  export type UserCreateOrConnectWithoutReferralsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReferralsInput, UserUncheckedCreateWithoutReferralsInput>
  }

  export type StatusLogCreateWithoutReferralInput = {
    id?: string
    fromStatus: string
    toStatus: string
    note?: string | null
    createdAt?: Date | string
    changedBy: string
  }

  export type StatusLogUncheckedCreateWithoutReferralInput = {
    id?: string
    fromStatus: string
    toStatus: string
    note?: string | null
    createdAt?: Date | string
    changedBy: string
  }

  export type StatusLogCreateOrConnectWithoutReferralInput = {
    where: StatusLogWhereUniqueInput
    create: XOR<StatusLogCreateWithoutReferralInput, StatusLogUncheckedCreateWithoutReferralInput>
  }

  export type StatusLogCreateManyReferralInputEnvelope = {
    data: StatusLogCreateManyReferralInput | StatusLogCreateManyReferralInput[]
  }

  export type PositionUpsertWithoutReferralsInput = {
    update: XOR<PositionUpdateWithoutReferralsInput, PositionUncheckedUpdateWithoutReferralsInput>
    create: XOR<PositionCreateWithoutReferralsInput, PositionUncheckedCreateWithoutReferralsInput>
    where?: PositionWhereInput
  }

  export type PositionUpdateToOneWithWhereWithoutReferralsInput = {
    where?: PositionWhereInput
    data: XOR<PositionUpdateWithoutReferralsInput, PositionUncheckedUpdateWithoutReferralsInput>
  }

  export type PositionUpdateWithoutReferralsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PositionUncheckedUpdateWithoutReferralsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUpsertWithoutReferralsInput = {
    update: XOR<UserUpdateWithoutReferralsInput, UserUncheckedUpdateWithoutReferralsInput>
    create: XOR<UserCreateWithoutReferralsInput, UserUncheckedCreateWithoutReferralsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReferralsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReferralsInput, UserUncheckedUpdateWithoutReferralsInput>
  }

  export type UserUpdateWithoutReferralsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutReferralsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    employeeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatusLogUpsertWithWhereUniqueWithoutReferralInput = {
    where: StatusLogWhereUniqueInput
    update: XOR<StatusLogUpdateWithoutReferralInput, StatusLogUncheckedUpdateWithoutReferralInput>
    create: XOR<StatusLogCreateWithoutReferralInput, StatusLogUncheckedCreateWithoutReferralInput>
  }

  export type StatusLogUpdateWithWhereUniqueWithoutReferralInput = {
    where: StatusLogWhereUniqueInput
    data: XOR<StatusLogUpdateWithoutReferralInput, StatusLogUncheckedUpdateWithoutReferralInput>
  }

  export type StatusLogUpdateManyWithWhereWithoutReferralInput = {
    where: StatusLogScalarWhereInput
    data: XOR<StatusLogUpdateManyMutationInput, StatusLogUncheckedUpdateManyWithoutReferralInput>
  }

  export type StatusLogScalarWhereInput = {
    AND?: StatusLogScalarWhereInput | StatusLogScalarWhereInput[]
    OR?: StatusLogScalarWhereInput[]
    NOT?: StatusLogScalarWhereInput | StatusLogScalarWhereInput[]
    id?: StringFilter<"StatusLog"> | string
    fromStatus?: StringFilter<"StatusLog"> | string
    toStatus?: StringFilter<"StatusLog"> | string
    note?: StringNullableFilter<"StatusLog"> | string | null
    createdAt?: DateTimeFilter<"StatusLog"> | Date | string
    referralId?: StringFilter<"StatusLog"> | string
    changedBy?: StringFilter<"StatusLog"> | string
  }

  export type ReferralCreateWithoutStatusHistoryInput = {
    id?: string
    refCode?: string
    candidateName: string
    candidateEmail: string
    candidatePhone: string
    resumeUrl?: string | null
    notes?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    position: PositionCreateNestedOneWithoutReferralsInput
    referredBy: UserCreateNestedOneWithoutReferralsInput
  }

  export type ReferralUncheckedCreateWithoutStatusHistoryInput = {
    id?: string
    refCode?: string
    candidateName: string
    candidateEmail: string
    candidatePhone: string
    resumeUrl?: string | null
    notes?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    referredById: string
    positionId: string
  }

  export type ReferralCreateOrConnectWithoutStatusHistoryInput = {
    where: ReferralWhereUniqueInput
    create: XOR<ReferralCreateWithoutStatusHistoryInput, ReferralUncheckedCreateWithoutStatusHistoryInput>
  }

  export type ReferralUpsertWithoutStatusHistoryInput = {
    update: XOR<ReferralUpdateWithoutStatusHistoryInput, ReferralUncheckedUpdateWithoutStatusHistoryInput>
    create: XOR<ReferralCreateWithoutStatusHistoryInput, ReferralUncheckedCreateWithoutStatusHistoryInput>
    where?: ReferralWhereInput
  }

  export type ReferralUpdateToOneWithWhereWithoutStatusHistoryInput = {
    where?: ReferralWhereInput
    data: XOR<ReferralUpdateWithoutStatusHistoryInput, ReferralUncheckedUpdateWithoutStatusHistoryInput>
  }

  export type ReferralUpdateWithoutStatusHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    refCode?: StringFieldUpdateOperationsInput | string
    candidateName?: StringFieldUpdateOperationsInput | string
    candidateEmail?: StringFieldUpdateOperationsInput | string
    candidatePhone?: StringFieldUpdateOperationsInput | string
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    position?: PositionUpdateOneRequiredWithoutReferralsNestedInput
    referredBy?: UserUpdateOneRequiredWithoutReferralsNestedInput
  }

  export type ReferralUncheckedUpdateWithoutStatusHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    refCode?: StringFieldUpdateOperationsInput | string
    candidateName?: StringFieldUpdateOperationsInput | string
    candidateEmail?: StringFieldUpdateOperationsInput | string
    candidatePhone?: StringFieldUpdateOperationsInput | string
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referredById?: StringFieldUpdateOperationsInput | string
    positionId?: StringFieldUpdateOperationsInput | string
  }

  export type ReferralCreateWithoutPositionInput = {
    id?: string
    refCode?: string
    candidateName: string
    candidateEmail: string
    candidatePhone: string
    resumeUrl?: string | null
    notes?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    referredBy: UserCreateNestedOneWithoutReferralsInput
    statusHistory?: StatusLogCreateNestedManyWithoutReferralInput
  }

  export type ReferralUncheckedCreateWithoutPositionInput = {
    id?: string
    refCode?: string
    candidateName: string
    candidateEmail: string
    candidatePhone: string
    resumeUrl?: string | null
    notes?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    referredById: string
    statusHistory?: StatusLogUncheckedCreateNestedManyWithoutReferralInput
  }

  export type ReferralCreateOrConnectWithoutPositionInput = {
    where: ReferralWhereUniqueInput
    create: XOR<ReferralCreateWithoutPositionInput, ReferralUncheckedCreateWithoutPositionInput>
  }

  export type ReferralCreateManyPositionInputEnvelope = {
    data: ReferralCreateManyPositionInput | ReferralCreateManyPositionInput[]
  }

  export type ReferralUpsertWithWhereUniqueWithoutPositionInput = {
    where: ReferralWhereUniqueInput
    update: XOR<ReferralUpdateWithoutPositionInput, ReferralUncheckedUpdateWithoutPositionInput>
    create: XOR<ReferralCreateWithoutPositionInput, ReferralUncheckedCreateWithoutPositionInput>
  }

  export type ReferralUpdateWithWhereUniqueWithoutPositionInput = {
    where: ReferralWhereUniqueInput
    data: XOR<ReferralUpdateWithoutPositionInput, ReferralUncheckedUpdateWithoutPositionInput>
  }

  export type ReferralUpdateManyWithWhereWithoutPositionInput = {
    where: ReferralScalarWhereInput
    data: XOR<ReferralUpdateManyMutationInput, ReferralUncheckedUpdateManyWithoutPositionInput>
  }

  export type ReferralCreateManyReferredByInput = {
    id?: string
    refCode?: string
    candidateName: string
    candidateEmail: string
    candidatePhone: string
    resumeUrl?: string | null
    notes?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    positionId: string
  }

  export type ReferralUpdateWithoutReferredByInput = {
    id?: StringFieldUpdateOperationsInput | string
    refCode?: StringFieldUpdateOperationsInput | string
    candidateName?: StringFieldUpdateOperationsInput | string
    candidateEmail?: StringFieldUpdateOperationsInput | string
    candidatePhone?: StringFieldUpdateOperationsInput | string
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    position?: PositionUpdateOneRequiredWithoutReferralsNestedInput
    statusHistory?: StatusLogUpdateManyWithoutReferralNestedInput
  }

  export type ReferralUncheckedUpdateWithoutReferredByInput = {
    id?: StringFieldUpdateOperationsInput | string
    refCode?: StringFieldUpdateOperationsInput | string
    candidateName?: StringFieldUpdateOperationsInput | string
    candidateEmail?: StringFieldUpdateOperationsInput | string
    candidatePhone?: StringFieldUpdateOperationsInput | string
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    positionId?: StringFieldUpdateOperationsInput | string
    statusHistory?: StatusLogUncheckedUpdateManyWithoutReferralNestedInput
  }

  export type ReferralUncheckedUpdateManyWithoutReferredByInput = {
    id?: StringFieldUpdateOperationsInput | string
    refCode?: StringFieldUpdateOperationsInput | string
    candidateName?: StringFieldUpdateOperationsInput | string
    candidateEmail?: StringFieldUpdateOperationsInput | string
    candidatePhone?: StringFieldUpdateOperationsInput | string
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    positionId?: StringFieldUpdateOperationsInput | string
  }

  export type StatusLogCreateManyReferralInput = {
    id?: string
    fromStatus: string
    toStatus: string
    note?: string | null
    createdAt?: Date | string
    changedBy: string
  }

  export type StatusLogUpdateWithoutReferralInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromStatus?: StringFieldUpdateOperationsInput | string
    toStatus?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    changedBy?: StringFieldUpdateOperationsInput | string
  }

  export type StatusLogUncheckedUpdateWithoutReferralInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromStatus?: StringFieldUpdateOperationsInput | string
    toStatus?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    changedBy?: StringFieldUpdateOperationsInput | string
  }

  export type StatusLogUncheckedUpdateManyWithoutReferralInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromStatus?: StringFieldUpdateOperationsInput | string
    toStatus?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    changedBy?: StringFieldUpdateOperationsInput | string
  }

  export type ReferralCreateManyPositionInput = {
    id?: string
    refCode?: string
    candidateName: string
    candidateEmail: string
    candidatePhone: string
    resumeUrl?: string | null
    notes?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    referredById: string
  }

  export type ReferralUpdateWithoutPositionInput = {
    id?: StringFieldUpdateOperationsInput | string
    refCode?: StringFieldUpdateOperationsInput | string
    candidateName?: StringFieldUpdateOperationsInput | string
    candidateEmail?: StringFieldUpdateOperationsInput | string
    candidatePhone?: StringFieldUpdateOperationsInput | string
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referredBy?: UserUpdateOneRequiredWithoutReferralsNestedInput
    statusHistory?: StatusLogUpdateManyWithoutReferralNestedInput
  }

  export type ReferralUncheckedUpdateWithoutPositionInput = {
    id?: StringFieldUpdateOperationsInput | string
    refCode?: StringFieldUpdateOperationsInput | string
    candidateName?: StringFieldUpdateOperationsInput | string
    candidateEmail?: StringFieldUpdateOperationsInput | string
    candidatePhone?: StringFieldUpdateOperationsInput | string
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referredById?: StringFieldUpdateOperationsInput | string
    statusHistory?: StatusLogUncheckedUpdateManyWithoutReferralNestedInput
  }

  export type ReferralUncheckedUpdateManyWithoutPositionInput = {
    id?: StringFieldUpdateOperationsInput | string
    refCode?: StringFieldUpdateOperationsInput | string
    candidateName?: StringFieldUpdateOperationsInput | string
    candidateEmail?: StringFieldUpdateOperationsInput | string
    candidatePhone?: StringFieldUpdateOperationsInput | string
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referredById?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReferralCountOutputTypeDefaultArgs instead
     */
    export type ReferralCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReferralCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PositionCountOutputTypeDefaultArgs instead
     */
    export type PositionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PositionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OtpVerificationDefaultArgs instead
     */
    export type OtpVerificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OtpVerificationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EmailLogDefaultArgs instead
     */
    export type EmailLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EmailLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReferralDefaultArgs instead
     */
    export type ReferralArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReferralDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StatusLogDefaultArgs instead
     */
    export type StatusLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StatusLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PositionDefaultArgs instead
     */
    export type PositionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PositionDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
