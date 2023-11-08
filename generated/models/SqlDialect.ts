/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The dialect of the SQL statement. This is used to validate and parse SQL statements at compilation time to avoid
 * expensive runtime operations. If set to an unsupported dialect, no validation will be done on the statement.
 * We support the following dialect: ansi, hive.
 */
export enum SqlDialect {
    UNDEFINED = 'UNDEFINED',
    ANSI = 'ANSI',
    HIVE = 'HIVE',
    OTHER = 'OTHER',
}
