/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Indicates the status of a catalog reservation operation.
 *
 * - RESERVATION_DISABLED: Used to indicate that reservations are disabled
 * - RESERVATION_ACQUIRED: Used to indicate that a reservation was successfully acquired or extended
 * - RESERVATION_EXISTS: Used to indicate that an active reservation currently exists
 * - RESERVATION_RELEASED: Used to indicate that the reservation has been successfully released
 * - RESERVATION_FAILURE: Used to indicate that a reservation operation resulted in failure
 */
export enum CatalogReservationStatus {
    RESERVATION_DISABLED = 'RESERVATION_DISABLED',
    RESERVATION_ACQUIRED = 'RESERVATION_ACQUIRED',
    RESERVATION_EXISTS = 'RESERVATION_EXISTS',
    RESERVATION_RELEASED = 'RESERVATION_RELEASED',
    RESERVATION_FAILURE = 'RESERVATION_FAILURE',
}
